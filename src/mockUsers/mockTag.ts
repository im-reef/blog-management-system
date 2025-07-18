import { mockPosts } from './mockPosts'; // must be defined beforehand

export const mockTags = [
  {
    id: 1,
    name: "NestJS",
    post: [mockPosts[0], mockPosts[3]],
  },
  {
    id: 2,
    name: "GraphQL",
    post: [mockPosts[0], mockPosts[1], mockPosts[3]],
  },
  {
    id: 3,
    name: "TypeScript",
    post: [mockPosts[2], mockPosts[3]],
  },
  {
    id: 4,
    name: "Testing",
    post: [mockPosts[4]],
  },
  {
    id: 5,
    name: "Backend",
    post: [mockPosts[1], mockPosts[3]],
  },
];

