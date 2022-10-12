import graphql from "@rollup/plugin-graphql";

export default {
  input: "src/index.js",
  output: {
    file: "output/index.js",
    format: "esm",
  },
  plugins: [graphql()],
};
