// src/data/examples.ts
export type ModelInfo = {
  name: string;
  host: string; // e.g. “OpenAI API” or “Local GPU”
  duration: string; // e.g. “3m 12s”
  cost: number; // e.g. 0.042
};
export type Example = {
  id: string; // slug, e.g. “chatgpt-4”
  title: string; // human-friendly, e.g. “GPT-4: AI-built hero section”
  prompt: string;
  models: ModelInfo[];
};
const examples: Example[] = [
  {
    id: "leaflink-1",
    title: "Leaf Link 1",
    prompt: `Are you familiar with how tanstack router works? It uses react and TAILWIND! this is what a route aitest.tsx looks like “”” import { createFileRoute } from '@tanstack/react-router'  export const Route = createFileRoute('/aitest')({ component: RouteComponent, })  function RouteComponent() { return <div>Hello "/gpttest"!</div> } “””  I want you to come up with the RouteComponent for a new page. It will be for a website called LeafLink where cannabis brands and creators can make their own page kinda like linktree and they can connect and see analyitics etc get creative. Make the landing page as best as you possibly can remember to use only tailwind classes if css is needed see if you can write that within the component. Lets see what you got!`,
    models: [
      {
        name: "gpt-oss:20b",
        host: "Local (M1 Mac Pro)",
        duration: "2hr+",
        cost: 0,
      },
      {
        name: "gpt-4o",
        host: "ChatGPT (Paid Plan)",
        duration: "couple sec (no reasoning)",
        cost: 20,
      },
      {
        name: "gpt-o4-mini-high",
        host: "ChatGPT (Paid Plan)",
        duration: "fewer sec",
        cost: 20,
      },
      {
        name: "MYSTERY-horizon-beta",
        host: "OpenRouter.AI (Free Beta)",
        duration: "few sec",
        cost: 0,
      },
    ],
  },
  // …more examples
];
export default examples;
