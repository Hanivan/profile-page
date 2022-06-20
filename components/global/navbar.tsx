import { navProps } from "@libs/props";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import { timeInHour } from "@libs/commons";
import LinkButton from "./link";

const Navbar: NextPage<navProps> = ({ title, desc }) => {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    timeInHour > 6 && timeInHour < 18 ? setDark(false) : setDark(true);
  }, []);

  const navList = [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
  ];

  return (
    <>
      <Head>
        <title>{`${title || "Nip's Journey"}`}</title>
        <meta
          name="description"
          content={`${desc || "My personal portfolio"}`}
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <nav className="flex items-center justify-evenly md:justify-between w-full h-12 text-indigo-500">
        <ul className="flex space-x-10 font-medium">
          {navList.map(({ text, href }) => (
            <li key={text}>
              <LinkButton href={href} text={text} dark={dark} />
              {/* <a className="hover:text-slate-800 p-1 transition hover:bg-indigo-600 active:text-indigo-300">
                  {text}
                </a> */}
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
