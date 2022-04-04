import { FC } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

export interface SEOProps {
  title?: string;
  description?: string;
}

const SEO: FC<SEOProps> = ({ title, description }) => {
  const router = useRouter();

  if (!title) title = "Team Fortress 2 Tools | tf2.tools";
  if (!description)
    description =
      "TF2.Tools, a website made to provide traders and bot owners with useful tools related to the game Team Fortress 2!";

  return (
    <Head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={"https://tf2.tools/" + router.pathname}
      />
      <meta property="og:description" content={description} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://tf2.tools/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />

      <meta name="theme-color" content="#040d19" />
    </Head>
  );
};

export default SEO;
