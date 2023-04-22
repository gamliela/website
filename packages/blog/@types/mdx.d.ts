// Augment the mdx module - add custom types to the basic mdx types provided by the vendor.
declare module "*.mdx" {
  type MDXContent = typeof import("*.mdx").default;

  interface BlogMetadata {
    id: string; // UUID v4.
    title: string;
    subTitle?: string;
    description: string;
    date: string;
  }

  const metadata: BlogMetadata | undefined;

  export type { BlogMetadata, MDXContent };
  export { metadata };
}
