import { githubProps } from "@libs/props";
import { NextPage } from "next";
import Image from "next/image";

const GithubInfo: NextPage<githubProps> = ({ data, isLoading }) => {
  return (
    <div className="grid place-items-center">
      {isLoading ? (
        <>
          <div className="grid place-items-center h-screen">
            <p>Loading...</p>
          </div>
        </>
      ) : (
        <>
          <section className="grid lg:grid-cols-3 place-items-center h-screen">
            <p className="hidden lg:block">{data.bio}</p>
            <div className="lg:grid lg:grid-col lg:w-52 lg:h-full text-center content-center">
              <a
                className="text-xl font-bold hover:text-indigo-600 active:text-indigo-600 transition"
                href={data.html_url}
                target="_blank"
              >
                {data.name}
              </a>
              <div>
                <Image
                  src={`${data.avatar_url || "/favicon.png"}`}
                  alt={data.login}
                  width={"200"}
                  height={"200"}
                  className={"text-center"}
                ></Image>
              </div>
              <p>{data.login}</p>
              <p>{data.location}</p>
            </div>
            <div>
              <p className="block lg:hidden w-4/5 mx-auto mb-4">{data.bio}</p>
              <ul className="w-5/6 md:w-full mx-auto">
                <li title="My Email">📧 {data.email || "..."}</li>
                <li title="Followers">🏃‍♂️ {data.followers}</li>
                <li title="Following">🕺 {data.following}</li>
                <li title="Web">
                  🌐{" "}
                  <a
                    className="text-indigo-500 hover:text-indigo-600 active:text-indigo-600 transition"
                    href={`https://${data.blog}`}
                  >
                    {data.blog}
                  </a>
                </li>
                <li title="Company">🏛️ {data.company}</li>
                <li title="Repos">📦 {data.public_repos}</li>
              </ul>
            </div>
          </section>
        </>
      )}
    </div>
  );
};

export default GithubInfo;
