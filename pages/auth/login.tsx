import Footer from "@components/global/footer";
import Navbar from "@components/global/navbar";
import { timeInHour } from "@libs/commons";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Login: NextPage = () => {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    timeInHour > 6 && timeInHour < 18 ? setDark(false) : setDark(true);
  }, []);
  return (
    <div
      className={`${
        dark ? "bg-slate-800 text-white transition duration-700" : "bg-slate-50"
      }`}
    >
      <main className={`container mx-auto`}>
        <Navbar />
        <section className="grid place-items-center h-screen">
          <div className="w-3/4 md:w-1/4 h-[25rem] border border-slate-700 shadow-xl p-8">
            <h4 className="text-xl font-bold text-center">Please Login</h4>
            <form action="" method="post">
              <div className="grid grid-col my-2">
                <label htmlFor="username" className="mb-2">
                  Username
                </label>
                <input
                  type="text"
                  name="@username"
                  id="username"
                  className={`${
                    dark
                      ? "text-indigo-800 p-1 rounded"
                      : "text-black p-1 rounded"
                  }`}
                />
              </div>
              <div className="grid grid-col my-2">
                <label htmlFor="password" className="mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="@password"
                  id="password"
                  className={`${
                    dark
                      ? "text-indigo-800 p-1 rounded"
                      : "text-black p-1 rounded"
                  }`}
                />
              </div>
              <button
                type="submit"
                className="border border-indigo-600 bg-indigo-600 rounded block w-full mt-5 p-1 hover:bg-indigo-700 font-semibold transition text-slate-200"
              >
                Login
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </main>
    </div>
  );
};

export default Login;
