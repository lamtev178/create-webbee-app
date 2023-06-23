declare module '@moxy/next-layout' {
  declare function withLayout<P = {}, S = {}>(
    layout: React.ReactElement | ((state: S) => React.ReactElement),
    state?: S | ((props: P) => S),
  ): (Page: React.ElementType) => React.ElementType;

  interface LayoutTreeProps {
    Component: React.ElementType;
    pageProps: any;
    defaultLayout?: React.ReactElement;
  }

  declare const LayoutTree: React.ComponentType<LayoutTreeProps>;
}
