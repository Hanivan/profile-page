import { linkButton } from "@libs/props";
import { NextPage } from "next";
import Link from "next/link";

const LinkButton: NextPage<linkButton> = ({ href, text, dark }) => {
  return (
    <Link href={href}>
      <a
        className={
          dark
            ? `hover:text-slate-800 p-1 transition hover:bg-indigo-600 active:text-indigo-300`
            : `hover:text-slate-200 p-1 transition hover:bg-indigo-600 active:text-indigo-300`
        }
      >
        {text}
      </a>
    </Link>
  );
};

export default LinkButton;
