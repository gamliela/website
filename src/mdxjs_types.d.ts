declare module "@mdx-js/react" {
  import { ComponentType, StyleHTMLAttributes } from "react";

  interface Components {
    [components: string]: React.ReactNode;
  }

  type MDXProps = {
    children: React.ReactNode;
    components?: Components;
  };

  export class MDXProvider extends React.Component<MDXProps> {}
}
