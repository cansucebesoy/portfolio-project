import { useEffect, useState } from "react";
import { Ellipse } from "../assets/Ellipse";
import { useTranslation } from "../hooks/UseTranslation";
import usePreferences from "../hooks/UsePreferences";

const skills = [
  {
    text: "JAVASCRIPT",
    fileName: "/js-logo 1.png",
  },
  {
    text: "REACT",
    fileName: "/Rectangle 35.png",
  },
  {
    text: "REDUX",
    fileName: "/Group 102.png",
  },
  {
    text: "NODE",
    fileName: "/node-logo 1.png",
  },
  {
    text: "VS CODE",
    fileName: "/Group 101.png",
  },
  {
    text: "FIGMA",
    fileName: "/figma-logo 1.png",
  },
];

function Skills() {
  const { theme } = usePreferences();
  const [color, setColor] = useState(theme === "dark" ? "#525252" : "#D9D9D9");

  useEffect(() => {
    setColor(theme === "dark" ? "#525252" : "#D9D9D9");
  }, [theme]);

  return (
    <div className="relative w-full flex flex-col px-24 pt-10 pb-24 gap-8 items-center dark:bg-[#484148] text-white">
      <div className="absolute -top-8 right-40 ">
        <Ellipse color={color} />
      </div>
      {/* <img
        src="/Ellipse 11.svg"
        alt=""
        className="absolute -top-16 right-40 "
      /> */}
      <img
        src="/Rectangle 22.png"
        alt=""
        className="absolute left-0 bottom-8 rounded-r-full"
      />
      <div className="font-inter font-normal text-3xl text-black dark:text-white">
        {useTranslation("skills.title")}
      </div>
      <div className="flex gap-x-8">
        {skills.map((skill) => (
          <div className="flex flex-col items-center gap-y-2">
            <img
              className="rounded w-12 h-12 md:w-20 md:h-20"
              src={skill.fileName}
              alt={skill.text}
            />
            <p className="text-[#777777] dark:text-[#D9D9D9] text-center text-nowrap">
              {skill.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
