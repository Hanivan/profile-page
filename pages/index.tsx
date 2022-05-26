import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { githubUserInfo } from "@libs/states";
import Navbar from "@components/global/navbar";
import Footer from "@components/global/footer";
import GithubInfo from "@components/github-info";
import { timeInHour } from "@libs/commons";

const Home: NextPage = () => {
  const [data, setData] = useState(githubUserInfo);
  const [isLoading, setLoading] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.github.com/users/Hanivan`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
    timeInHour > 6 && timeInHour < 18 ? setDark(false) : setDark(true);
  }, []);

  return (
    <div
      className={`${
        dark
          ? "bg-slate-800 text-white transition duration-700"
          : "bg-slate-300"
      }`}
    >
      <main className={`container mx-auto`}>
        <Navbar desc={data.bio} />
        <GithubInfo data={data} isLoading={isLoading} />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
