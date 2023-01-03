import Head from "next/head";
import React from "react";
import Navbar from "./Navbar";
import { useState, useEffect } from "react";
import Loader from "./CustomLoader";

function PageLayout({ children, title = "Home" }) {

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 5000)
  }, [])

  return loading ? (
    <div>
      <Loader />

    </div>
  ) : (
    <>
      <Head>
        <title>{title}</title>

        <meta
          name="desciption"
          content="this is the portfolio of Gonzalo Gabriel Villavicencio"
        />
      </Head>


      <header>
        <div className="mb-10">
          <Navbar />
        </div>

      </header>
      <main>
        <div>
          {children}
        </div>
      </main>

    </>
  );
}

export default PageLayout;
