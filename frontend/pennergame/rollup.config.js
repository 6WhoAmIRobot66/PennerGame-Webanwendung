import typescript from "rollup-plugin-typescript2";
import terser from "@rollup/plugin-terser";

const mode = process.env.MODE;
const isProd = mode === "prod";

export default {
  input: 'index.ts',
  output: [
    {
      file: "dist/index.js",
      exports: "named",
      format: "es",
      sourcemap: !isProd,
    },
  ],
  plugins: [
    typescript({
      useTsconfigDeclarationDir: true,
      tsconfigOverride: { compilerOptions: { sourceMap: !isProd } },
    }),
    isProd && terser(),
  ],
};
