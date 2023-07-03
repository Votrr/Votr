import { DocsThemeConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Head from "next/head";
import Cta from "./components/Cta";

const config: DocsThemeConfig = {
  logo: (
    <span className="logo text-2xl font-semibold shadow-md shadow-sky-800 font-sans text-gray-500">
      Votr.io
    </span>
  ),
  project: {
    link: "https://github.com/david-glitc/Docs.Votr_io",
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/david-glitc/Docs.Votr_io",
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://nextra.site" target="_blank">
          Votr.io
        </a>
        .
      </span>
    ),
  },

  sidebar: {
    autoCollapse: true,
    toggleButton: true,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Votr.io",
      };
    }
  },
  navbar: {
    extraContent: Cta
  },
  head: (
    <Head>
      <title>
        Votr.io | Revolutionizing Voting with the Blockchain
      </title>
      <meta
        name="description"
        content="Votr.io is an innovative platform that leverages blockchain technology to revolutionize electronic voting. Join us and experience a new era of secure and transparent voting."
      />
      <meta
        property="og:title"
        content="Votr.io | Revolutionizing Electronic Voting through Blockchain"
      />
      <meta
        property="og:description"
        content="Votr.io is an innovative platform that leverages blockchain technology to revolutionize electronic voting. Join us and experience a new era of secure and transparent voting."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.votr-io.vercel.app" />
      <meta property="og:image" content="/images/votr-io-logo.png" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  ),
};

export default config;
