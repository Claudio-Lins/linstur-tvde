import NavFooter from "../components/NavFooter";
import NavHeader from "../components/NavHeader";
import Head from "next/head";

export default function Layout({ children, title = "LinsTur - TVDE" }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col h-screen">
        <main className="flex-1">
          <div className="fixed inset-x-0">
            <NavHeader />
          </div>
          {children}
          <NavFooter />
        </main>
      </div>
    </>
  );
}
