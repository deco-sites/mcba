import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 445,
  site: "mcba",
  domains: ["deco-sites-mcba.deno.dev"],
});