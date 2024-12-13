import { useQuery } from "@tanstack/react-query";

interface GithubProject {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  topics: string[];
}

const fetchGithubProjects = async (username: string): Promise<GithubProject[]> => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }
  return response.json();
};

export const useGithubProjects = (username: string) => {
  return useQuery({
    queryKey: ["github-projects", username],
    queryFn: () => fetchGithubProjects(username),
  });
};