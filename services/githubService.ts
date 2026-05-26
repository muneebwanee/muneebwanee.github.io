import { GitHubRepo } from '../types.ts';

const GITHUB_USERNAME = 'muneebwanee';
const API_URL = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`;

export const fetchProjects = async (): Promise<GitHubRepo[]> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded. Please try again later.");
      }
      throw new Error(`GitHub API error: ${response.statusText}`);
    }
    const data: GitHubRepo[] = await response.json();
    // Sort by stars for better portfolio presentation, then by updated
    return data.sort((a, b) => b.stargazers_count - a.stargazers_count);
  } catch (error) {
    console.error("Failed to fetch projects", error);
    // Return empty array or throw depending on how we want to handle it UI side
    // For now, return empty to avoid crashing
    return [];
  }
};