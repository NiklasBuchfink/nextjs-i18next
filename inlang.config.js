/**
 * @type { import("@inlang/core/config").DefineConfig }
 */
export async function defineConfig(env) {
  const { default: pluginJson } = await env.$import("./i18next.js");
  // const { default: pluginJson } = await env.$import(
  //   "https://cdn.jsdelivr.net/gh/samuelstroschein/inlang-plugin-json@2.4.0/dist/index.js"
  // );

  const { default: standardLintRules } = await env.$import(
    "https://cdn.jsdelivr.net/npm/@inlang/plugin-standard-lint-rules@3/dist/index.js"
  );

  return {
    referenceLanguage: "en",
    plugins: [
      pluginJson({
        // {
        pathPattern:
          // "client-page": "./app/i18n/locales/{language}/client-page.json",
          // footer: "./app/i18n/locales/{language}/footer.json",
          // "second-page": "./app/i18n/locales/{language}/second-page.json",
          "./app/i18n/locales/{language}/translation.json",
        // },
      }),
      standardLintRules(),
    ],
  };
}
