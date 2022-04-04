import { FC, useEffect, useState } from "react";
import { Card } from "primereact/card";
import Link from "next/link";
import { motion } from "framer-motion";

import styles from "./PageSelector.module.css";
import { useRouter } from "next/router";

const pages = [
  {
    name: "F.A.Q",
    url: "/faq",
  },
  {
    name: "Item Conversions",
    url: "/item-conversions",
  },
  {
    name: "Trade Counter",
    url: "/trade-counter",
  },
  {
    name: "Trade Summarizer",
    url: "/trade-summarizer",
  },
  {
    name: "Useful Browser Scripts",
    url: "/useful-scripts",
  },
];

const PageSelector: FC = () => {
  const router = useRouter();
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    setSelectedIndex(
      pages.findIndex((i) => {
        return i.url === router.pathname;
      }) || 0
    );

    console.log(
      pages.findIndex((i) => {
        return i.url === router.pathname;
      }) || 0
    );
  }, [router]);

  return (
    <Card title="Choose Page" style={{ width: "100%" }}>
      <ul className="m-0 p-0 list-none">
        {pages.map((page, index) => (
          <li key={page.url}>
            <Link href={page.url}>
              <a className="text-white no-underline">
                <h3 className={styles["page"] + " mt-2"}>{page.name}</h3>
              </a>
            </Link>
            {index === selectedIndex ? (
              <motion.div
                className={styles["underline"]}
                layoutId="underline"
              />
            ) : null}
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default PageSelector;
