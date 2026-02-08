export type Project = {
  id: number;
  name: string;
  description: string;
  tech: string[];
};

export type ContactMessage = {
  id: number;
  name: string;
  email: string;
  message: string;
  createdAt: string;
};

// Portfolio Data
export const portfolio = {
  profile: {
    name: "Bijay Dhakal",
    title: "Software Developer Student",
    summary: "REST-style portfolio API built with Node.js, Express, and TypeScript."
  },

  about: {
    bio: "I am focused on backend development and building scalable APIs.",
    skills: ["Node.js", "Express", "TypeScript", "Git"],
    location: "Canada"
  },

  projects: [
    {
      id: 1,
      name: "Forex Analyzer",
      description: "JavaFX app analyzing forex market data.",
      tech: ["Java", "JavaFX", "MySQL"]
    },
    {
      id: 2,
      name: "Weather App",
      description: "Backend weather API with frontend integration.",
      tech: ["PHP", "API", "HTML", "CSS"]
    }
  ] as Project[]
};

// Contact messages stored in memory
export const contactMessages: ContactMessage[] = [];
