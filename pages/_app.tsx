import { DokzProvider, GithubLink, ColorModeSwitch } from "dokz/dist";
import React, { Fragment } from "react";
import Head from "next/head";
import "./styles.css";
import { ChakraProvider } from "@chakra-ui/react";
export default function App(props: any) {
  const { Component, pageProps } = props;
  return (
    <Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Fira+Code"
          rel="stylesheet"
          key="google-font-Fira"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;400;900&family=Playfair+Display:ital,wght@1,800&display=swap"
          rel="stylesheet"
        />
      </Head>
      <ChakraProvider resetCSS>
        <DokzProvider
          headerLogo={
            <a href="https://www.molasses.app">
              <img
                src="https://molasses.app/molasses-logo.png"
                alt="molasseslogo"
                width="170"
                height="33"
              />
            </a>
          }
          animate={true}
          fontFamily={`Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"`}
          headerItems={[
            <GithubLink
              key="0"
              url="https://github.com/molassesapp"
              aria-label="Molasses App's github"
            />,
            <ColorModeSwitch key="1" />,
          ]}
          sidebarOrdering={{
            "index.mdx": true,
            Help: {
              architecture: true,
              environments: true,
              features: true,
              slack: true,
            },
            SDK: {
              "browser.mdx": true,
              "node.mdx": true,
              "react.mdx": true,
              "golang.mdx": true,
              "python.mdx": true,
              "ruby.mdx": true,
            },
          }}
        >
          <Component {...pageProps} />
        </DokzProvider>
      </ChakraProvider>
    </Fragment>
  );
}
