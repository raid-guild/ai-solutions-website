# Content Integrations

## Homepage Dispatches

The homepage media/dispatch section can combine manually configured links with
public posts from the RaidGuild Portal.

Code paths:

- `src/app/page.tsx` calls `getPortalPosts({ limit: 3, categoryId: 13 })`.
- `src/lib/portal-posts.ts` defines custom dispatch links, then fetches and
  normalizes Portal API responses to fill the remaining slots.
- `src/components/MediaSection.tsx` renders the cards.

Custom dispatch links are configured in `CUSTOM_MEDIA_POSTS` inside
`src/lib/portal-posts.ts`. These entries appear before Portal posts.

Current custom links:

```txt
https://fireside.raidguild.org/
```

This links to the "Field Experience from the Edge" field report from the AI
adoption interviews.

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

After custom links are added, the section tries to pin one featured Portal post.
If that post is available, it appears after custom links and the remaining cards
are filled with the latest public posts from category `13`. If the featured post
is not available, the section falls back to the latest public `AI Solutions`
posts.

The Portal fetch uses Next.js revalidation:

```txt
15 minutes
```

This means production content is cached and will not refresh on every request.
