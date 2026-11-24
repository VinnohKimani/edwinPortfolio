/**
 * Sync script to fetch latest Medium articles and GitHub repositories
 * Runs on Node.js without heavy external dependencies.
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const MEDIUM_USERNAME = "kimruto68";
const GITHUB_USERNAME = "kimruto68";

const BLOGS_FILE = path.join(__dirname, "../src/data/blogsData.json");
const REPOS_FILE = path.join(__dirname, "../src/data/githubRepos.json");

// 1. Fetch Medium Articles via RSS-to-JSON
async function syncMediumBlogs() {
  console.log(`[Sync] Fetching Medium articles for @${MEDIUM_USERNAME}...`);
  try {
    const rssUrl = `https://medium.com/feed/@${MEDIUM_USERNAME}`;
    const apiUrl = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(rssUrl)}`;

    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.warn(`[Sync] RSS-to-JSON returned HTTP ${res.status}`);
      return;
    }

    const data = await res.json();
    if (data.status === "ok" && Array.isArray(data.items)) {
      const articles = data.items.map((item, index) => {
        // Extract first <img> tag from description/content if thumbnail is missing
        let image = item.thumbnail;
        if (!image && item.content) {
          const match = item.content.match(/<img[^>]+src="([^">]+)"/);
          if (match) image = match[1];
        }

        // Clean HTML tags from content preview
        const rawBrief = item.description || item.content || "";
        const cleanBrief = rawBrief
          .replace(/<[^>]*>/g, " ")
          .replace(/\s+/g, " ")
          .trim()
          .slice(0, 300);

        return {
          id: String(index + 1),
          title: item.title,
          image:
            image ||
            "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
          brief: cleanBrief + "...",
          link: item.link,
          pubDate: item.pubDate,
        };
      });

      if (articles.length > 0) {
        fs.writeFileSync(BLOGS_FILE, JSON.stringify(articles, null, 2), "utf-8");
        console.log(`[Sync] Successfully updated ${articles.length} Medium articles in ${BLOGS_FILE}`);
      }
    }
  } catch (err) {
    console.error("[Sync] Error fetching Medium articles:", err.message);
  }
}

// 2. Fetch GitHub Repositories
async function syncGitHubRepos() {
  console.log(`[Sync] Fetching GitHub repos for user ${GITHUB_USERNAME}...`);
  try {
    const apiUrl = `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`;
    const res = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Portfolio-Sync-Script",
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!res.ok) {
      console.warn(`[Sync] GitHub API returned HTTP ${res.status}`);
      return;
    }

    const repos = await res.json();
    if (Array.isArray(repos)) {
      const publicRepos = repos
        .filter((repo) => !repo.fork && !repo.archived)
        .slice(0, 6)
        .map((repo) => ({
          name: repo.name,
          description: repo.description || "Cloud and DevOps infrastructure repository.",
          url: repo.html_url,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          language: repo.language || "HCL",
          topics: repo.topics || [],
          updatedAt: repo.updated_at,
        }));

      fs.writeFileSync(REPOS_FILE, JSON.stringify(publicRepos, null, 2), "utf-8");
      console.log(`[Sync] Successfully updated ${publicRepos.length} repos in ${REPOS_FILE}`);
    }
  } catch (err) {
    console.error("[Sync] Error fetching GitHub repos:", err.message);
  }
}

async function run() {
  await syncMediumBlogs();
  await syncGitHubRepos();
  console.log("[Sync] Completed.");
}

run();
