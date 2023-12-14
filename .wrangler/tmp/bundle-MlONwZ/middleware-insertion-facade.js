				import worker, * as OTHER_EXPORTS from "/Users/pwittig/code/workers-ai-playground-nextjs/.wrangler/tmp/pages-YsB9yj/ipp5byqxbk.js";
				import * as __MIDDLEWARE_0__ from "/Users/pwittig/code/workers-ai-playground-nextjs/node_modules/wrangler/templates/middleware/middleware-miniflare3-json-error.ts";
				const envWrappers = [__MIDDLEWARE_0__.wrap].filter(Boolean);
				const facade = {
					...worker,
					envWrappers,
					middleware: [
						__MIDDLEWARE_0__.default,
            ...(worker.middleware ? worker.middleware : []),
					].filter(Boolean)
				}
				export * from "/Users/pwittig/code/workers-ai-playground-nextjs/.wrangler/tmp/pages-YsB9yj/ipp5byqxbk.js";

				const maskDurableObjectDefinition = (cls) =>
					class extends cls {
						constructor(state, env) {
							let wrappedEnv = env
							for (const wrapFn of envWrappers) {
								wrappedEnv = wrapFn(wrappedEnv)
							}
							super(state, wrappedEnv);
						}
					};
				

				export default facade;