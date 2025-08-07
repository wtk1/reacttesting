import { createFileRoute, Link } from "@tanstack/react-router";
import examples from "../../../data/examples";

export const Route = createFileRoute("/_pathlessLayout/examples/$exampleId")({
  loader: async ({ params }) => {
    return { exampleId: params.exampleId };
  },
  component: ExampleDetail,
});

function ExampleDetail() {
  const { exampleId } = Route.useParams();
  const example = examples.find((e) => e.id === exampleId);
  if (!example) return <p className="text-red-600">Example not found.</p>;

  return (
    <div className="space-y-6">
      <Link to="/" className="text-sm text-blue-600 hover:underline">
        ← Back
      </Link>

      <h2 className="text-3xl font-semibold text-gray-900">{example.title}</h2>

      <section>
        <h3 className="text-2xl font-medium text-gray-900 mb-4">Models</h3>
        <ul className="space-y-4">
          {example.models.map((m) => (
            <li
              key={m.name}
              className="flex flex-col sm:flex-row sm:justify-between bg-white p-4 rounded-2xl shadow"
            >
              <div>
                <p className="font-medium text-gray-900">{m.name}</p>
                <p className="text-sm text-gray-600">
                  {m.host} · {m.duration} · ${m.cost.toFixed(3)}
                </p>
              </div>
              <Link
                to="/examples/$exampleId/$modelId"
                params={{
                  exampleId: example.id,
                  modelId: m.name,
                }}
                className="mt-3 sm:mt-0 self-start sm:self-center px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition"
              >
                View Page
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="text-2xl font-medium text-gray-900 mb-2">Prompt</h3>
        <pre className="bg-white p-4 rounded-lg whitespace-pre-wrap text-gray-800">
          {example.prompt}
        </pre>
      </section>
    </div>
  );
}
