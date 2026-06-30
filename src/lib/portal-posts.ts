const PORTAL_ORIGIN = "https://portal.raidguild.org";
const FEATURED_POST_SLUG =
  "from-legacy-complexity-to-progressive-automation-the-daohaus-hauskeeper-raid";
const CUSTOM_MEDIA_POSTS: MediaPost[] = [
  {
    id: "fireside-ai-field-experience",
    title: "Field Experience from the Edge",
    href: "https://fireside.raidguild.org/",
    description:
      "A field report from 15 builder interviews on how people are adapting to AI in real work.",
    publishedAt: "2026-06-30",
    publishedLabel: "Field Report",
    imageAlt: "Field Experience from the Edge",
    imageUrl: "/assets/fireside-preview.png",
  },
];

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
  docs?: PortalPost[];
};

type PortalPost = {
  id: number | string;
  title?: string;
  slug?: string;
  publishedAt?: string;
  createdAt?: string;
  meta?: {
    description?: string | null;
    image?: PortalMedia | null;
  };
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
  if (date === undefined || date === null || date.trim() === "") {
    return "Featured";
  }

  const timestamp = Date.parse(date);
  if (Number.isNaN(timestamp)) return "Featured";

  return new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(timestamp));
};

type GetPortalPostsOptions = {
  limit?: number;
  categoryId?: number | string;
};

const normalizePortalPost = (post: PortalPost): MediaPost | null => {
  if (!post.slug) return null;

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
    description: post.meta?.description || "Read more from RaidGuild.",
    publishedAt,
    publishedLabel: formatDate(publishedAt),
    imageAlt: image?.alt || post.title || "RaidGuild Portal post",
    imageUrl,
  };
};

const fetchPortalPosts = async ({
  limit,
  categoryId,
  slug,
}: GetPortalPostsOptions & { limit: number; slug?: string }) => {
  const url = new URL("/api/posts", PORTAL_ORIGIN);
  url.searchParams.set("limit", String(limit));
  url.searchParams.set("depth", "1");
  url.searchParams.set("sort", "-publishedAt");
  url.searchParams.set("where[visibility][equals]", "public");

  if (categoryId) {
    url.searchParams.set("where[categories][in]", String(categoryId));
  }

  if (slug) {
    url.searchParams.set("where[slug][equals]", slug);
  }

  try {
    const response = await fetch(url, {
      next: { revalidate: 60 * 15 },
    });

    if (!response.ok) {
      let body = "";
      try {
        body = await response.text();
      } catch {
        body = "Unable to read response body.";
      }

      console.error(
        `Failed to fetch portal posts: ${response.status} ${response.statusText}`,
        { url: url.toString(), body },
      );
      return [];
    }

    const data = (await response.json()) as PortalPostResponse;

    return (data.docs || []).flatMap((post) => normalizePortalPost(post) || []);
  } catch (error) {
    console.error("Failed to fetch portal posts.", error);
    return [];
  }
};

/**
 * Fetches public Portal posts and normalizes them for the homepage media cards.
 */
export async function getPortalPosts({
  limit = 3,
  categoryId,
}: GetPortalPostsOptions = {}): Promise<MediaPost[]> {
  if (limit <= 0) return [];

  const customPosts = CUSTOM_MEDIA_POSTS.slice(0, limit);
  const portalLimit = Math.max(limit - customPosts.length, 0);

  if (portalLimit === 0) return customPosts;

  const [featuredPosts, latestPosts] = await Promise.all([
    fetchPortalPosts({
      limit: 1,
      slug: FEATURED_POST_SLUG,
    }),
    fetchPortalPosts({
      limit: portalLimit + 1,
      categoryId,
    }),
  ]);

  const featuredPost = featuredPosts[0];

  if (!featuredPost) {
    return [...customPosts, ...latestPosts].slice(0, limit);
  }

  const latestWithoutFeatured = latestPosts.filter(
    (post) => post.href !== featuredPost.href,
  );

  return [customPosts, featuredPost, latestWithoutFeatured]
    .flat()
    .slice(0, limit);
}
