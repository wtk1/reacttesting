import { createFileRoute } from "@tanstack/react-router";
import { Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_pathlessLayout")({
  component: LayoutComponent,
});

function LayoutComponent() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-white shadow p-4">
        <h1 className="text-2xl font-bold text-gray-900">
          AI-Component Gallery
        </h1>
      </header>
      <main className="p-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
    </div>
  );
}
