import type { AppProps } from "next/app";
import "primereact/resources/themes/lara-dark-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; //flex
import api from "primereact/api";
import "../styles/globals.css";
import Navbar from "../components/Navbar";
import Link from "next/link";

function MyApp({ Component, pageProps }: AppProps) {
  api.ripple = true;
  return (
    <>
      <Navbar />
      <div className="m-2">
        <Component {...pageProps} />
        <div className="made-by-footer">
          <Link href="https://steamcommunity.com/id/aethez">
            <a target="_blank" className="text-white no-underline">
              made by aethez
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}

export default MyApp;
