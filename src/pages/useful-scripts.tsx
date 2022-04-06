import { NextPage } from "next";
import { Card } from "primereact/card";
import PageSelector from "../components/PageSelector";
import AnimateScaler from "../components/AnimateScaler";
import Link from "next/link";
import SEO from "../components/SEO";

const usefulScripts = [
  {
    name: "SteamDetective",
    nameHref:
      "https://forums.backpack.tf/topic/78650-steamdetective-take-background-checking-to-the-next-level/",
    author: "Abstract",
    authorHref: "https://steamcommunity.com/profiles/76561198087558444",
    oneClickInstall:
      "https://gitlab.com/carbonwind/steamdetective/-/raw/main/SteamDetective.user.js",
    description:
      "Displays extra information about users on their steam profiles!",
  },
  {
    name: "SCM History Cataloger",
    nameHref: "https://github.com/juliarose/Steam-Market-History-Cataloger",
    author: "Julia",
    authorHref: "https://github.com/juliarose",
    oneClickInstall:
      "https://chrome.google.com/webstore/detail/steam-market-history-cata/dhpcikljplaooekklhbjohojbjbinega",
    description:
      "A Chrome extension that allows you to navigate your steam market history easily!",
  },
  {
    name: "Trade Offer Enhancer",
    nameHref: "https://github.com/juliarose/steam-trade-offer-enhancer",
    author: "Julia",
    authorHref: "https://github.com/juliarose",
    oneClickInstall:
      "https://github.com/juliarose/steam-trade-offer-enhancer/blob/master/steam.trade.offer.enhancer.user.js?raw=true",
    description:
      "Shows additional information about trades and adds the ability to add multiple items to a trade at once, a must have.",
  },
  {
    name: "Bot Utilities",
    nameHref: "https://github.com/Bonfire/bptf-bot-utilities",
    author: "Bonfire",
    authorHref: "https://github.com/Bonfire",
    oneClickInstall:
      "https://github.com/Bonfire/bptf-bot-utilities/raw/master/bptf-bot-utilities.user.js",
    description:
      "A collection of useful bot utilities, such as getting marketplace SKUs from backpack.tf listings",
  },
];

const Index: NextPage = () => {
  return (
    <>
      <SEO
        title="Useful Browser Scripts | tf2.tools"
        description="There are many scripts made out there to aid you in your tf2 journey, here is just a small list of helpful scripts that you may want to use."
      />

      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 col-12">
          <AnimateScaler>
            <Card
              title="Useful Browser Scripts"
              style={{ width: "100%", marginBottom: "1em" }}
            >
              <p className="m-0">
                There are many scripts made out there to aid you in your tf2
                journey, here is just a small list of helpful scripts that you
                may want to use. Please note that for some of these you will
                need to install{" "}
                <Link href="https://www.tampermonkey.net/">
                  <a className="link">tampermonkey</a>
                </Link>{" "}
                or{" "}
                <Link href="https://violentmonkey.github.io/get-it/">
                  <a target="_blank" className="link">
                    Violentmonkey
                  </a>
                </Link>
                !
              </p>

              <ul className="list-none m-0 p-0">
                {usefulScripts.map((script) => (
                  <li key={script.name} className="mt-2">
                    <h4 className="link-group">
                      <Link href={script.nameHref}>
                        <a target="_blank">{script.name}</a>
                      </Link>{" "}
                      -{" "}
                      <Link href={script.authorHref}>
                        <a target="_blank">{script.author}</a>
                      </Link>{" "}
                      -{" "}
                      <Link href={script.oneClickInstall}>
                        <a target="_blank">one click install</a>
                      </Link>
                      <p>{script.description}</p>
                    </h4>
                  </li>
                ))}
              </ul>
            </Card>
          </AnimateScaler>
        </div>
      </div>
    </>
  );
};

export default Index;
