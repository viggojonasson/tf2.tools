import { NextPage } from "next";
import { Card } from "primereact/card";
import { InputTextarea } from "primereact/inputtextarea";
import { Currency } from "tf2-currency";

import SEO from "../components/SEO";
import PageSelector from "../components/PageSelector";
import AnimateScaler from "../components/AnimateScaler";
import { useEffect, useState } from "react";
import Link from "next/link";

const Index: NextPage = () => {
  const [input, setInput] = useState("");
  const [currency, setCurrency] = useState(new Currency({}));

  useEffect(() => {
    let keys = 0;
    let ref = 0;
    let rec = 0;
    let scrap = 0;

    const splitInput = input.split(",");

    for (let i = 0; i < splitInput.length; i++) {
      const name = splitInput[i].trim();
      switch (name) {
        case "Mann Co. Supply Crate Key":
          keys++;
          break;
        case "Refined Metal":
          ref++;
          break;
        case "Reclaimed Metal":
          rec++;
          break;
        case "Scrap Metal":
          scrap++;
          break;
      }
    }

    setCurrency(
      new Currency({
        keys,
        metal: ref + rec * 0.33 + scrap * 0.11,
      })
    );
  }, [input]);

  return (
    <>
      <SEO
        title="Trade Counter | tf2.tools"
        description="Count the pure in your trades!"
      />

      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 sm:col-12">
          <AnimateScaler>
            <Card
              title="What's this?"
              style={{ width: "100%", marginBottom: "1em" }}
            >
              <p className="m-0">
                This is a tool that counts amount of pure that is in a trade.
                Head to{" "}
                <Link href="https://steamcommunity.com/id/aethez/tradehistory">
                  <a target="_blank" className="text-blue-500">
                    your trade history
                  </a>
                </Link>{" "}
                and copy paste one side of a trade!
              </p>
              <p>
                This tool was inspired by{" "}
                <Link href="https://steamcommunity.com/id/joekiller">
                  <a target="_blank" className="text-blue-500">
                    joekiller
                  </a>
                </Link>
                !
              </p>
            </Card>
          </AnimateScaler>
          <AnimateScaler>
            <Card
              title="Trade Counter"
              style={{ width: "100%", marginBottom: "1em" }}
            >
              <InputTextarea
                rows={5}
                cols={30}
                autoResize
                style={{ width: "100%" }}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Scrap Metal, Mann Co. Supply Crate Key, Mann Co. Supply Crate Key, Mann Co. Supply Crate Key, Mann Co. Supply Crate Key, Mann Co. Supply Crate Key..."
              />
              <p className="font-semibold">
                This amounts to {currency.toString()}!
              </p>
            </Card>
          </AnimateScaler>
        </div>
      </div>
    </>
  );
};

export default Index;
