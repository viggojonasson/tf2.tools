import { FC, useState } from "react";
import { Menubar } from "primereact/menubar";
import { Button } from "primereact/button";
import Link from "next/link";

const Navbar: FC = () => {
  return (
    <Menubar
      style={{ borderRadius: 0, padding: "3px" }}
      className="surface"
      start={
        <Link href="/">
          <h1 className="ml-4 cursor-pointer">
            <i className="pi pi-cog text-2xl pr-2"></i>
            TF2.Tools
          </h1>
        </Link>
      }
      model={[]}
      end={
        <Link href="https://github.com/viggojonasson/tf2.tools">
          <Button
            icon="pi pi-github"
            className="p-button-rounded p-button-secondary mr-4"
            tooltip="Source Code"
            tooltipOptions={{ position: "left" }}
          ></Button>
        </Link>
      }
    />
  );
};

export default Navbar;
