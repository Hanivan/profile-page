import { navProps } from "@libs/props";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

const Navbar: NextPage<navProps> = ({ title, desc }) => {
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
              <Link href={href}>
                <a className="hover:text-indigo-600 p-1 transition hover:bg-indigo-300 active:text-indigo-300">
                  {text}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
