import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import examples from "../../data/examples";
import * as React from "react";

export const Route = createFileRoute("/_pathlessLayout/")({
  component: Home,
});

function Home() {
  return (
    <div>
      <h2 className="text-3xl font-semibold mb-6 text-gray-900">
        Examples
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {examples.map(({ id, title, models }) => (
          <Link
            key={id}
            to='/examples/$exampleId'
            params={{
              exampleId: id
            }}
            className="block p-4 bg-white rounded-2xl shadow hover:shadow-lg transition"
          >
            <h3 className="text-xl font-medium text-gray-900">
              {title}
            </h3>
            <p className="mt-2 text-sm text-gray-600">
              {models.map((m) => m.name).join(', ')}
            </p>
          </Link>
        ))}
      </div>
    </div>
  )
}
