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
    Python: "logos:python",
    Django: "logos:django-icon",
    Flask: "logos:flask",

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
    jQuery: "logos:jquery",

    // Cloud / Platforms
    AWS: "logos:aws",
    Cloudinary: "logos:cloudinary",
    Heroku: "logos:heroku",

    // Productivity / Others
    Jira: "logos:jira",
    Salesforce: "logos:salesforce",
    npm: "logos:npm",
    Postman: "logos:postman-icon",
  };

  return map[skill] || "solar:code-bold-duotone";
}
