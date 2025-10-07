import type { NextConfig } from "next";
import createMDX from "@next/mdx";

const withMDX = createMDX({ options:{ remarkPlugins:[require("remark-gfm")], rehypePlugins:[require("rehype-slug"), require("rehype-autolink-headings")] }});
export default withMDX({ pageExtensions: ["ts","tsx","md","mdx"] } satisfies NextConfig);

