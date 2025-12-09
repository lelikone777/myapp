export type Project = {
  slug: string;
  title: string;
  stack: string[];
  link: string;
  description: string;
};

export const projects: Project[] = [
  {
    slug: "project-1",
    title: "Project 1",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://example.com/project1",
    description: "Description of project 1",
  },
  {
    slug: "project-2",
    title: "Project 2",
    stack: ["React", "Next.js", "TypeScript"],
    link: "https://example.com/project2",
    description: "Description of project 2",
  },
  {
    slug: "project-3",
    title: "Project 3",
    stack: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://example.com/project3",
    description: "Description of project 3",
  },
  {
    slug: "project-4",
    title: "Project 4",
    stack: ["Next.js", "TypeScript", "GraphQL"],
    link: "https://example.com/project4",
    description: "Description of project 4",
  },
  {
    slug: "project-5",
    title: "Project 5",
    stack: ["React", "Redux", "React Router"],
    link: "https://example.com/project5",
    description: "Description of project 5",
  },
  {
    slug: "project-6",
    title: "Project 6",
    stack: ["HTML", "CSS", "JavaScript", "jQuery"],
    link: "https://example.com/project6",
    description: "Description of project 6",
  },
  {
    slug: "project-7",
    title: "Project 7",
    stack: ["React", "Next.js", "TypeScript", "GraphQL"],
    link: "https://example.com/project7",
    description: "Description of project 7",
  },
  {
    slug: "project-8",
    title: "Project 8",
    stack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    link: "https://example.com/project8",
    description: "Description of project 8",
  },
  {
    slug: "project-9",
    title: "Project 9",
    stack: ["Next.js", "TypeScript", "GraphQL", "Apollo Client"],
    link: "https://example.com/project9",
    description: "Description of project 9",
  },
  {
    slug: "project-10",
    title: "Project 10",
    stack: ["React", "Next.js", "TypeScript", "Redux", "React Router"],
    link: "https://example.com/project10",
    description: "Description of project 10",
  },
];
