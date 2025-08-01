import { baseURL } from "@/resources";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
      },
      // Block specific AI bots
      {
        userAgent: "GPTBot",
        disallow: "/",
      },
      {
        userAgent: "Google-Extended", // Google's AI tool
        disallow: "/",
      },
      {
        userAgent: "Anthropic-ai", // Anthropic's crawler
        disallow: "/",
      },
      {
        userAgent: "CCBot", // Common Crawl (used by AI companies)
        disallow: "/",
      },
      {
        userAgent: "FacebookBot", // Facebook's scraper (sometimes used for LLM training)
        disallow: "/",
      },
      {
        userAgent: "ClaudeBot", // Claude's user-agent, if known
        disallow: "/",
      },
    ],
    sitemap: `${baseURL}/sitemap.xml`,

  };
}
