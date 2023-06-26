/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
  // const { default: pluginJson } = await env.$import("./i18next.js");
  const { default: pluginJson } = await env.$import(
    "https://cdn.jsdelivr.net/gh/samuelStrohschein/plugin-json@2.4.0/dist/index"
  );

  const { default: standardLintRules } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js"
  );

  return {
    referenceLanguage: "en",
    plugins: [
      pluginJson({ pathPattern: "./app/i18n/locales/{language}/*.json" }),
      standardLintRules(),
    ],
  };
}
