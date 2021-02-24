import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeader";
import Head from "next/head";


export default function Layout({ children, title = "LinsTur - TVDE" }) {
  return (
    <>
      <div>
        <Head>
          <title>{title}</title>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <header>
          <NavHeader />
        </header>
        {children}
        <NavFooter />
      </div>
    </>
  );
}
