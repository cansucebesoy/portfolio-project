import { IconsLinkedln } from "../assets/IconsLinkedln";
import { IconsGithub } from "../assets/IconsGithub";
import { useTranslation } from "../hooks/UseTranslation";
import axios from "axios";
import { useState, useEffect } from "react";
import usePreferences from "../hooks/UsePreferences";
import { ClipLoader } from "react-spinners";
import { getTranslations } from "../services/Services";

function Header() {
  const [isLoading, setIsLoading] = useState(false);
  const [paths, setPaths] = useState({});

  const { theme } = usePreferences();
  const [color, setColor] = useState(theme === "dark" ? "#D9D9D9" : "#0A0A14");

  useEffect(() => {
    setColor(theme === "dark" ? "#D9D9D9" : "#0A0A14");
  }, [theme]);

  useEffect(() => {
    const fetchPaths = async () => {
      setIsLoading(true);
      const response = await getTranslations({
        paths: {
          greeting: "header.greeting",
          description: "header.description",
        },
      });
      console.log("response, ", response);
      setPaths(response.data.paths);
      setIsLoading(false);
    };

    fetchPaths();
  }, []);

  return (
    <div className="w-full bg-[#F5F5F5] min-h-[380px] dark:bg-[#2A262B] dark:text-white flex justify-center px-24 gap-10 relative pt-10 pb-10 -z-50">
      {isLoading ? (
        <div className="flex items-center justify-center h-full w-full absolute inset-0 z-10">
          <ClipLoader color={color} />
        </div>
      ) : (
        <div className="w-full md:w-2/3 flex-col md:flex md:flex-row justify-center gap-x-8">
          <img
            src="/Rectangle 18.png"
            alt=""
            className="absolute right-0 bottom-20 rounded-l-full"
          />
          <div className="relative w-full md:w-1/2 flex flex-col items-start">
            <img
              src="/Rectangle 2.svg"
              alt=""
              className="absolute top-20 -left-4 rounded dark:color-[#E92577] "
            />
            <p className="font-normal tracking-wider text-2xl pb-5 font-inter">
              {useTranslation(paths.greeting)}
            </p>
            <p className="font-inter font-normal text-3xl pb-6 relative tracking-wider">
              {useTranslation(paths.description)}
            </p>
            <span className="flex gap-2 pb-4 w-12 h-12 ">
              <IconsLinkedln color={color} />
              <IconsGithub color={color} />
              {/* <img className="w-6 h-6 " src="LinkedIn.svg" alt="" /> */}
              {/* <img className="w-6 h-6" src="/github.svg" alt="" /> */}
            </span>
            <p className="text-xs ">
              Currently <span className="text-[#EA2678]">Freelancing</span> for
              <span className="text-[#EA2678]"> UX, UI & Web Design</span>{" "}
              Project.
              <br /> Invite me to join your team →{" "}
              <span className="text-[#EA2678] underline decoration-1 underline-offset-2">
                pratamaiosi@gmail.com
              </span>
            </p>
          </div>

          <div className="hidden w-1/2 md:flex items-center justify-center">
            <div className="w-2/3 relative">
              <img src="/foto.png" alt="" className="rounded-3xl w-full z-10" />
              <img
                src="/Rectangle 3.png"
                alt=""
                className="absolute rounded-3xl w-full -top-4 -left-4 -z-10"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
