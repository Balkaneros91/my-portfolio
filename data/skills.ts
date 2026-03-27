export type Skill = {
  name: string;
  icon: string;
};

export const coreStack: Skill[] = [
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
];

export const skillGroups: { title: string; items: Skill[] }[] = [
  {
    title: "Frontend",
    items: [
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "React", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Bootstrap", icon: "logos:bootstrap" },
      { name: "jQuery", icon: "logos:jquery" },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express", icon: "simple-icons:express" },
      { name: "REST APIs", icon: "solar:server-2-bold-duotone" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Python", icon: "logos:python" },
      { name: "Django", icon: "logos:django-icon" },
      { name: "Flask", icon: "logos:flask" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Supabase", icon: "logos:supabase-icon" },
    ],
  },
  {
    title: "Cloud & Deployment",
    items: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Heroku", icon: "logos:heroku" },
      { name: "Cloudinary", icon: "logos:cloudinary" },
    ],
  },
  {
    title: "Tools",
    items: [
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "mdi:github" },
      { name: "VS Code", icon: "logos:visual-studio-code" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Azure DevOps", icon: "logos:microsoft-azure-devops" },
      { name: "Jira", icon: "logos:jira" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "npm", icon: "logos:npm" },
      { name: "Salesforce", icon: "logos:salesforce" },
    ],
  },
];
