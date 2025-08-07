import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense } from "react";

export const Route = createFileRoute("/examples_/$exampleId/$modelId")({
  component: PageView,
});

function Skeleton() {
  return (
    <div className="p-6">
      <div className="h-6 w-40 bg-gray-200 dark:bg-gray-800 rounded mb-4 animate-pulse" />
      <div className="h-4 w-80 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
      <div className="h-4 w-64 bg-gray-200 dark:bg-gray-800 rounded mb-2 animate-pulse" />
      <div className="h-64 w-full bg-gray-200 dark:bg-gray-800 rounded-xl mt-6 animate-pulse" />
    </div>
  );
}

function PageView() {
  const { exampleId, modelId } = Route.useParams();

  const PageComponent = lazy(() =>
    import(`../../../generated-pages/${modelId}/${exampleId}.tsx`)
  );

  return (
      <Suspense
        fallback={
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Skeleton />
          </div>
        }
      >
        <div className="mx-auto">
          <PageComponent />
        </div>
      </Suspense>
  );
}