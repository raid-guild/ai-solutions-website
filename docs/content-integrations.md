# Content Integrations

## RaidGuild Portal Dispatches

The homepage media/dispatch section pulls public posts from the RaidGuild Portal.

Code paths:

- `src/app/page.tsx` calls `getPortalPosts({ limit: 3, categoryId: 13 })`.
- `src/lib/portal-posts.ts` fetches and normalizes Portal API responses.
- `src/components/MediaSection.tsx` renders the cards.

Portal API origin:

```txt
https://portal.raidguild.org
```

Post endpoint:

```txt
https://portal.raidguild.org/api/posts
```

Current category filter:

```txt
categoryId: 13
```

Category `13` is:

```txt
Technology
└── AI Solutions
```

The section also tries to pin one featured post first:

```txt
from-legacy-complexity-to-progressive-automation-the-daohaus-hauskeeper-raid
```

If that post is available, it appears first and the remaining cards are filled
with the latest public posts from category `13`. If the featured post is not
available, the section falls back to the latest public `AI Solutions` posts.

The Portal fetch uses Next.js revalidation:

```txt
15 minutes
```

This means production content is cached and will not refresh on every request.
