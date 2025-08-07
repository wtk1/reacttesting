import { createFileRoute, Link } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

export const Route = createFileRoute("/examples_/$exampleId/$modelId")({
  component: PageView,
});

function PageView() {
  const { exampleId, modelId } = Route.useParams();

  const PageComponent = lazy(() =>
    import(`../../../generated-pages/${modelId}/${exampleId}.tsx`)
  );

  return (
    <div className="relative min-h-screen">
      {/* Floating back button */}
      {/*
      <Link
        to="/examples/$exampleId"
        params={{ exampleId }}
        className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm text-blue-600 shadow hover:underline"
      >
        ← Back
      </Link>
      */}

      <Suspense fallback={<p className="p-4">Loading page...</p>}>
        <PageComponent />
      </Suspense>
    </div>
  );
}