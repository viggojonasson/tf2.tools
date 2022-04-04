import { NextPage } from "next";
import { Card } from "primereact/card";
import { Accordion, AccordionTab } from "primereact/accordion";
import PageSelector from "../components/PageSelector";
import AnimateScaler from "../components/AnimateScaler";
import Link from "next/link";
import SEO from "../components/SEO";

const Index: NextPage = () => {
  return (
    <>
      <SEO
        title="F.A.Q | tf2.tools"
        description="This is a website that was made to provide tools to use, mainly for trading and owning bots in the game Team Fortress 2."
      />

      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 sm:col-12">
          <AnimateScaler>
            <Card title="F.A.Q" style={{ width: "100%", marginBottom: "1em" }}>
              <Accordion activeIndex={0} multiple>
                <AccordionTab header="What's this?">
                  <p>
                    This is a website that was made to provide tools to use,
                    mainly for trading and owning bots in the game Team Fortress
                    2. Hopefully there will be alot more features coming in the
                    future, so please feel free to open github issues with
                    feature requests.
                  </p>
                </AccordionTab>
                <AccordionTab header="How is it funded?">
                  <p>
                    It&aposs quite simple really, it&aposs not funded! It is
                    currently running on a free tier of netlify hosting.
                  </p>
                </AccordionTab>
                <AccordionTab header="How can I contribute?">
                  <p>
                    Head to our{" "}
                    <Link href="https://github.com/viggojonasson/tf2.tools">
                      <a className="text-blue-500">github repository</a>
                    </Link>{" "}
                    and open a new issue or pull request. All pull requests are
                    welcome and if you are unsure of how the code should be
                    structured or if it is alright then we can gladly help you
                    if you make a pull request.
                  </p>
                </AccordionTab>
              </Accordion>
            </Card>
          </AnimateScaler>
        </div>
      </div>
    </>
  );
};

export default Index;
