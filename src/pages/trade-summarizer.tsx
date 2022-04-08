import { NextPage } from "next";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import SEO from "../components/SEO";

import PageSelector from "../components/PageSelector";
import AnimateScaler from "../components/AnimateScaler";
import { useEffect, useState } from "react";
import Link from "next/link";

const Index: NextPage = () => {
  const [input, setInput] = useState("");
  const [summary, setSummary] = useState<{ their: string; our: string }>({
    our: "",
    their: "",
  });

  useEffect(() => {
    const split = input.split("–"); // "-" is not the same as "–" :/

    if (split.length !== 2) {
      setSummary({ their: "", our: "" });
      return;
    }

    const theirSide = split[0]
      .replace("+", "")
      .replace(/\n/g, "")
      .trim()
      .split(",");
    const ourSide = split[1].trim().split(",");

    const theirItems: { [name: string]: number } = {};
    const ourItems: { [name: string]: number } = {};

    [0, 1].forEach((l) => {
      const obj = l === 0 ? ourItems : theirItems;
      (l === 0 ? ourSide : theirSide).forEach((item) => {
        if (obj[item]) obj[item]++;
        else obj[item] = 1;
      });
    });

    let summary = { our: "", their: "" };
    for (const item in theirItems) {
      summary.their += `${item} ${
        theirItems[item] === 0 ? "" : `x${theirItems[item]}`
      },`;
    }
    for (const item in ourItems) {
      summary.our += `${item} ${
        ourItems[item] === 0 ? "" : `x${ourItems[item]}`
      },`;
    }

    // Remove last character out of summary
    summary.their = summary.their.slice(0, -1);
    summary.our = summary.our.slice(0, -1);

    setSummary(summary);
  }, [input]);

  return (
    <>
      <SEO
        title="Trade Summarizer | tf2.tools"
        description="Summarize trade contents into a more readable format!"
      />

      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 col-12">
          <AnimateScaler>
            <Card
              title="What's this?"
              style={{ width: "100%", marginBottom: "1em" }}
            >
              <p className="m-0">
                This is a tool that counts amount of pure that is in a trade.
                Head to{" "}
                <Link href="https://steamcommunity.com/my/tradehistory">
                  <a target="_blank" className="text-blue-500">
                    your trade history
                  </a>
                </Link>{" "}
                and copy paste the entire trade contents.
              </p>
            </Card>
          </AnimateScaler>
          <AnimateScaler>
            <Card
              title="Trade Summarizer"
              style={{ width: "100%", marginBottom: "1em" }}
            >
              <InputTextarea
                rows={5}
                cols={30}
                autoResize
                style={{ width: "100%" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="
                +Unusual Taunt: The Killer Solo
                –Scrap Metal, Mann Co. Supply Crate Key
                "
              />
              <h4>My Items:</h4>
              <p>{summary.our}</p>
              <h4>Their Items:</h4>
              <p>{summary.their}</p>
            </Card>
          </AnimateScaler>
        </div>
      </div>
    </>
  );
};

export default Index;
