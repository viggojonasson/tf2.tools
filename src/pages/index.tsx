import { NextPage } from "next";
import { useRouter } from "next/router";
import { Button } from "primereact/button";
import PageSelector from "../components/PageSelector";
import SEO from "../components/SEO";

const pages = [
  "faq",
  "item-conversions",
  "trade-counter",
  "trade-summarizer",
  "useful-scripts",
];

const Index: NextPage = () => {
  const router = useRouter();

  return (
    <>
      <SEO />
      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 col-12">
          <div
            className="p-4 border-round text-center"
            style={{ backgroundColor: "#071426" }}
          >
            <i
              className="pi pi-info text-8xl p-4 border-circle"
              style={{ backgroundColor: "#93C5FD" }}
            ></i>
            <h1 className="text-6xl">No page selected!</h1>
            <Button
              label="Go To Random Page"
              className="p-button-rounded"
              onClick={() => {
                router.push(
                  "/" + pages[Math.floor(Math.random() * pages.length)]
                );
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Index;
