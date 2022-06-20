import Footer from "@components/global/footer";
import Navbar from "@components/global/navbar";
import { timeInHour } from "@libs/commons";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const About: NextPage = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    timeInHour > 6 && timeInHour < 18 ? setDark(false) : setDark(true);
  }, []);
  return (
    <div
      className={`${
        dark
          ? "bg-slate-800 text-white transition duration-700"
          : "bg-slate-100"
      }`}
    >
      <main className={`container mx-auto`}>
        <Navbar />
        <section className="grid place-items-center h-screen">
          <h1>Hello World</h1>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default About;
