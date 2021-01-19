import { DokzProvider, GithubLink, ColorModeSwitch } from "dokz/dist";
import React, { Fragment } from "react";
import Head from "next/head";
import { Flex, Box } from "@chakra-ui/core";
import "./styles.css";
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
      <DokzProvider
        headerLogo={
          <Flex>
            <img
              src="https://www.molasses.app/pirateship.png"
              width="50"
              height="45"
              style={{ height: 45 }}
            />
            <Box
              fontWeight="medium"
              fontFamily="PlayFair Display"
              fontSize="32px"
            >
              Molasses
            </Box>
          </Flex>
        }
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
    </Fragment>
  );
}
