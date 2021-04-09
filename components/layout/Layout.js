import Head from "next/head";
import Header from "./Header";
import Content from "./Content";

const Layout = ({ children, title }) => {
  return (
    <div>
      <Head>
        <title>{title || "scottdomes.dev"}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Content>{children}</Content>
    </div>
  );
};

export default Layout;
