import { createFileRoute, Link } from "@tanstack/react-router";
import examples from "../../../data/examples";
import { useState } from "react";

export const Route = createFileRoute("/_pathlessLayout/examples/$exampleId")({
  loader: async ({ params }) => {
    return { exampleId: params.exampleId };
  },
  component: ExampleDetail,
});

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800/70 px-2.5 py-1 text-xs font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
      {children}
    </span>
  );
}

function ExampleDetail() {
  const { exampleId } = Route.useParams();
  const example = examples.find((e) => e.id === exampleId);
  if (!example)
    return (
      <div className="rounded-xl border border-red-200 bg-red-50 text-red-800 p-4">
        Example not found.
      </div>
    );

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-1 text-sm text-sky-700 dark:text-sky-300 hover:underline"
        >
          ← Back
        </Link>
        <div className="h-4 w-px bg-gray-200 dark:bg-gray-800" />
        <Pill>ID: {example.id}</Pill>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-gray-100">
          {example.title}
        </h2>
        <div className="flex flex-wrap gap-2">
          <Pill>{example.models.length} models</Pill>
          <Pill>
            Fastest:{" "}
            {example.models.find((m) => m.duration.toLowerCase().includes("sec"))?.duration ??
              example.models[0].duration}
          </Pill>
          <Pill>
            Cheapest: ${example.models.reduce((a, b) => (a.cost < b.cost ? a : b)).cost.toFixed(3)}
          </Pill>
        </div>
      </div>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
          Models
        </h3>
        <ul className="space-y-4">
          {example.models.map((m) => (
            <li
              key={m.name}
              className="group flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 bg-white dark:bg-gray-900 p-4 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm hover:shadow transition"
            >
              <div>
                <p className="font-medium text-gray-900 dark:text-gray-100">{m.name}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {m.host} · {m.duration} · ${m.cost.toFixed(3)}
                </p>
              </div>
              <Link
                to="/examples/$exampleId/$modelId"
                params={{ exampleId: example.id, modelId: m.name }}
                className="self-start sm:self-center inline-flex items-center gap-2 px-4 py-2 rounded-xl text-white bg-gradient-to-r from-sky-600 to-violet-600 hover:from-sky-500 hover:to-violet-500 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-sky-500 focus-visible:outline-none shadow"
              >
                View Page
                <svg className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
                  <path d="M12.293 3.293a1 1 0 011.414 0l4 4a1 1 0 11-1.414 1.414L13 6.414V16a1 1 0 11-2 0V6.414L7.707 8.707A1 1 0 116.293 7.293l4-4z" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Prompt
        </h3>
        <PromptBlock text={example.prompt} />
      </section>
    </div>
  );
}

function PromptBlock({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <div className="relative">
      <pre className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-4 rounded-xl whitespace-pre-wrap text-gray-800 dark:text-gray-200 text-sm leading-6 overflow-auto">
        {text}
      </pre>
      <button
        onClick={() => {
          navigator.clipboard.writeText(text);
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        }}
        className="absolute top-2 right-2 inline-flex items-center gap-2 rounded-lg bg-gray-100 dark:bg-gray-800 px-3 py-1.5 text-xs text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}