import { FC } from "react";
import Link from "next/link";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import AnimateScaler from "../components/AnimateScaler";
import SEO from "../components/SEO";

const NotFound: FC = () => {
  return (
    <>
      <SEO
        title="Not Found | tf2.tools"
        description="You must have dug deep to have gotten to this part of the website!"
      />
      <AnimateScaler>
        <div
          style={{
            width: "100%",
            height: "70vh",
            overflow: "hidden",
            display: "grid",
            placeItems: "center",
          }}
        >
          <div
            className="text-center border-round p-8"
            style={{ backgroundColor: "#071426" }}
          >
            <div className="flex justify-content-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                initial={{ rotate: 0 }}
              >
                <i className="pi pi-compass text-8xl"></i>
              </motion.div>
            </div>
            <h1 className="m-2 text-surface-50 lg:text-8xl sm:text-7xl">
              404 Not Found
            </h1>
            <p>Perhaps you meant to go somewhere else?</p>
            <Link href="/">
              <Button
                label="Go Home"
                className="p-button-rounded p-button-info"
              />
            </Link>
          </div>
        </div>
      </AnimateScaler>
    </>
  );
};

export default NotFound;
