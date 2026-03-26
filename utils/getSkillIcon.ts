export function getSkillIcon(skill: string) {
  const map: Record<string, string> = {
    // Frontend
    HTML: "logos:html-5",
    CSS: "logos:css-3",
    JavaScript: "logos:javascript",
    TypeScript: "logos:typescript-icon",
    React: "logos:react",
    "Next.js": "logos:nextjs-icon",
    "Tailwind CSS": "logos:tailwindcss-icon",
    Bootstrap: "logos:bootstrap",

    // Backend
    "Node.js": "logos:nodejs-icon",
    Express: "simple-icons:express",
    "REST APIs": "solar:server-2-bold-duotone",
    GraphQL: "logos:graphql",

    // Databases
    MongoDB: "logos:mongodb-icon",
    PostgreSQL: "logos:postgresql",
    Supabase: "logos:supabase-icon",

    // Tools
    Git: "logos:git-icon",
    GitHub: "mdi:github",
    "VS Code": "logos:visual-studio-code",
    Figma: "logos:figma",
    "Azure DevOps": "logos:microsoft-azure-devops",
  };

  return map[skill] || "solar:code-bold-duotone";
}
