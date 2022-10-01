import { FunctionComponent } from "react";
import NavBar from "../components/Navbar/NavBar";
import { LayoutProps } from "./Layout.props";

const Layout = ({ children }: LayoutProps): JSX.Element => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
