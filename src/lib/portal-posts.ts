const PORTAL_ORIGIN = "https://portal.raidguild.org";

type PortalMedia = {
  alt?: string | null;
  url?: string | null;
  sizes?: {
    small?: { url?: string | null };
    medium?: { url?: string | null };
    large?: { url?: string | null };
  };
};

type PortalPostResponse = {
  docs?: Array<{
    id: number | string;
    title?: string;
    slug?: string;
    publishedAt?: string;
    createdAt?: string;
    meta?: {
      description?: string | null;
      image?: PortalMedia | null;
    };
  }>;
};

export type MediaPost = {
  id: string;
  title: string;
  href: string;
  description: string;
  publishedAt: string;
  publishedLabel: string;
  imageAlt: string;
  imageUrl: string | null;
};

const absolutePortalUrl = (path?: string | null) => {
  if (!path) return null;
  if (path.startsWith("http")) return path;
  return `${PORTAL_ORIGIN}${path}`;
};

const formatDate = (date: string) => {
  if (!date) return "Latest";

  const timestamp = Date.parse(date);
  if (Number.isNaN(timestamp)) return "Latest";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp));
};

export async function getPortalPosts({
  limit = 3,
  categoryId,
}: {
  limit?: number;
  categoryId?: number | string;
} = {}): Promise<MediaPost[]> {
  const url = new URL("/api/posts", PORTAL_ORIGIN);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("depth", "1");
  url.searchParams.set("sort", "-publishedAt");
  url.searchParams.set("where[visibility][equals]", "public");

  if (categoryId) {
    url.searchParams.set("where[categories][in]", String(categoryId));
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 15 },
    });

    if (!response.ok) return [];

    const data = (await response.json()) as PortalPostResponse;

    return (data.docs || []).map((post) => {
      const image = post.meta?.image;
      const imageUrl =
        absolutePortalUrl(image?.sizes?.medium?.url) ||
        absolutePortalUrl(image?.sizes?.small?.url) ||
        absolutePortalUrl(image?.url);

      const publishedAt = post.publishedAt || post.createdAt || "";

      return {
        id: String(post.id),
        title: post.title || "Untitled",
        href: `${PORTAL_ORIGIN}/posts/${post.slug}`,
        description: post.meta?.description || "Read the latest from RaidGuild.",
        publishedAt,
        publishedLabel: formatDate(publishedAt),
        imageAlt: image?.alt || post.title || "RaidGuild Portal post",
        imageUrl,
      };
    });
  } catch {
    return [];
  }
}
