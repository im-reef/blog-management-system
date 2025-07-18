import { mockUsers } from './mock'; // assuming you already have users
import { mockTags } from './mockTag'; // assuming you already have tags

export const mockPosts = [
  {
    id: 1,
    title: "Getting Started with NestJS",
    content: "NestJS is a framework for building efficient Node.js server-side applications.",
    author: mockUsers[0], // e.g., ammar
  },
  {
    id: 2,
    title: "Understanding GraphQL",
    content: "GraphQL lets you query and mutate data with a flexible schema.",
    author: mockUsers[1],
  },
  {
    id: 3,
    title: "Advanced TypeScript Types",
    content: "Explore utility types, generics, and advanced TS patterns.",
    author: mockUsers[2],
  },
  {
    id: 4,
    title: "Building APIs with NestJS + GraphQL",
    content: "Combine the power of NestJS and GraphQL for scalable APIs.",
    author: mockUsers[0],
  },
  {
    id: 5,
    title: "How to Mock Data in Dev Environments",
    content: "Learn techniques to create fake/mock data for testing and development.",
    author: mockUsers[3],
  },
];
