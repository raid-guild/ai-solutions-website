import HomePage from "@/views/HomePage";
import { getPortalPosts } from "@/lib/portal-posts";

export default async function Page() {
  const mediaPosts = await getPortalPosts({
    limit: 3,
    categoryId: 13,
  });

  return <HomePage mediaPosts={mediaPosts} />;
}
