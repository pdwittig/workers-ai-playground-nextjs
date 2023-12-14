// <define:__ROUTES__>
var define_ROUTES_default = { version: 1, description: "Built with @cloudflare/next-on-pages@1.8.2.", include: ["/*"], exclude: ["/_next/static/*"] };

// node_modules/wrangler/templates/pages-dev-pipeline.ts
import worker from "/Users/pwittig/code/workers-ai-playground-nextjs/.wrangler/tmp/pages-17WQ9q/bundledWorker-0.1590101632455163.mjs";
export * from "/Users/pwittig/code/workers-ai-playground-nextjs/.wrangler/tmp/pages-17WQ9q/bundledWorker-0.1590101632455163.mjs";
import { isRoutingRuleMatch } from "/Users/pwittig/code/workers-ai-playground-nextjs/node_modules/wrangler/templates/pages-dev-util.ts";
var routes = define_ROUTES_default;
var pages_dev_pipeline_default = {
  fetch(request, env, context) {
    const { pathname } = new URL(request.url);
    for (const exclude of routes.exclude) {
      if (isRoutingRuleMatch(pathname, exclude)) {
        return env.ASSETS.fetch(request);
      }
    }
    for (const include of routes.include) {
      if (isRoutingRuleMatch(pathname, include)) {
        if (worker.fetch === void 0) {
          throw new TypeError("Entry point missing `fetch` handler");
        }
        return worker.fetch(request, env, context);
      }
    }
    return env.ASSETS.fetch(request);
  }
};
export {
  pages_dev_pipeline_default as default
};
//# sourceMappingURL=04pul66cv6pc.js.map
