import { NextPage } from "next";
import PageSelector from "../components/PageSelector";
import SEO from "../components/SEO";

const Index: NextPage = () => {
  return (
    <>
      <SEO />
      <div className="grid">
        <div className="col-12 lg:col-4">
          <PageSelector />
        </div>
        <div className="lg:col-8 sm:col-12">
          <h1 className="text-center text-3xl">No page selected!</h1>
        </div>
      </div>
    </>
  );
};

export default Index;
