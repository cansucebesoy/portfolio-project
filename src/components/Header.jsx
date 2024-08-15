import { IconsLinkedln } from "../assets/IconsLinkedln";
import { IconsGithub } from "../assets/IconsGithub";
import { useTranslation } from "../hooks/UseTranslation";
import axios from "axios";
import { useState, useEffect } from "react";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [paths, setPaths] = useState({});
  const color = document.documentElement.classList.contains("dark")
    ? "#0A0A14"
    : "#D9D9D9";

  useEffect(() => {
    const fetchPaths = async () => {
      setIsLoading(true);
      const response = await axios({
        method: "POST",
        url: "https://reqres.in/api/workintech",
        data: {
          paths: {
            greeting: "header.greeting",
            description: "header.description",
          },
        },
      });

      console.log("response, ", response);
      setPaths(response.data.paths);
      setTimeout(() => setIsLoading(false), 1000);
    };

    fetchPaths();
  }, []);

  if (isLoading) {
    return <div>LOADING... PLEASE WAIT...</div>;
  }

  return (
    <div className="w-full bg-[#F5F5F5] dark:bg-[#2A262B] dark:text-white flex justify-center px-24 gap-10 relative pt-10 pb-10">
      <img
        src="/Rectangle 18.png"
        alt=""
        className="absolute right-0 bottom-20 rounded-l-full"
      />
      <div className="relative w-1/2 flex flex-col items-start">
        <img
          src="/Rectangle 2.svg"
          alt=""
          className="absolute top-16 -left-4 rounded dark:color-[#E92577] "
        />
        <p className="font-medium text-sm pb-5 ">
          {useTranslation(paths.greeting)}
        </p>
        <p className="font-inter font-normal text-3xl pb-6 relative">
          {useTranslation(paths.description)}
        </p>
        <span className="flex gap-2 pb-4 ">
          <IconsLinkedln color={color} />
          <IconsGithub color={color} />
          {/* <img className="w-6 h-6 " src="LinkedIn.svg" alt="" /> */}
          {/* <img className="w-6 h-6" src="/github.svg" alt="" /> */}
        </span>
        <p className="text-xs ">
          Currently <span className="text-[#EA2678]">Freelancing</span> for
          <span className="text-[#EA2678]"> UX, UI & Web Design</span> Project.
          <br /> Invite me to join your team →{" "}
          <span className="text-[#EA2678] underline decoration-1 underline-offset-2">
            pratamaiosi@gmail.com
          </span>
        </p>
      </div>

      <div className="w-1/2 flex items-center justify-center ">
        <img src="/foto.png" alt="" className="rounded-3xl w-2/3 " />
      </div>
    </div>
  );
}

export default Header;
