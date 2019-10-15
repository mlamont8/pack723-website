import Head from "next/head";
import Nav from "./nav";
import "../styles.scss";

const Layout = props => (
  <div>
    <Head>
      <title>Pack 723</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.0/normalize.min.css"
      />
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.4.2/css/all.css"
        integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns"
        crossOrigin="anonymous"
      />
      <style>{`
                body {
                    margin: 0;
                    display: block;
                }
            `}</style>
    </Head>
    <Nav />
    {props.children}
  </div>
);

export default Layout;
