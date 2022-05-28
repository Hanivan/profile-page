import { NextPage } from "next";
import Link from "next/link";

const Footer: NextPage = () => {
  return (
    <div className="flex items-center justify-evenly text-center h-12">
      <span>
        ©2022 Made With
        <Link href={"/auth/login"}>
          <a>❤️</a>
        </Link>
        By Hanivan Rizky Sobari
      </span>
    </div>
  );
};

export default Footer;
