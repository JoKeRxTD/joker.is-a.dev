import "../globals.css";
import "react-tippy/dist/tippy.css";
import "nprogress/nprogress.css";

import { AnimatePresence } from "framer-motion";
import Head from "next/head";
import { Router } from "next/router";
import NProgress from "nprogress";
import { useEffect } from "react";

import Footer from "@components/Footer";
import Nav from "@components/Nav";
import Spotify from "@components/Spotify";

import type { AppProps } from "next/app";
Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

function MyApp({ Component, pageProps, router }: AppProps) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    void new Audio("/pop.mp3").play().catch(() => null);
  }, [router.pathname]);

  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>JoKeR Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="keywords"
          content="Tom, JoKeR Portfolio, joker, OKane, web developer, github, typescript, nextjs, discord, discordjs"
        />
        <meta name="description" content="JoKeR Portfolio - Software Engineer" />
        <meta name="author" content="JoKeR Portfolio" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </Head>

      <div className="text-black dark:text-white flex flex-row justify-center w-full h-full bg-gradient-to-bl from-white to-[#fff] dark:from-black dark:to-[#0d131f] min-h-screen">
        <Nav />
        <div className="w-[80%] md:w-[45rem]">
          <AnimatePresence exitBeforeEnter>
            <Component {...pageProps} key={router.pathname} />
          </AnimatePresence>
          <Footer />
        </div>
        <Spotify />
      </div>
    </>
  );
}
export default MyApp;
