/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
  const { default: i18nextPlugin } = await env.$import("./plugin.js");

  const { default: standardLintRules } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js"
  );

  return {
    referenceLanguage: "en",
    plugins: [
      i18nextPlugin({
        pathPattern: "./app/i18n/locales/{language}/*.json",
      }),
      standardLintRules(),
    ],
  };
}
