import { Ellipse } from "../assets/Ellipse";
import { useTranslation } from "../hooks/UseTranslation";

function Skills() {
  const color = document.documentElement.classList.contains("dark")
    ? "#525252"
    : "#D9D9D9";
  return (
    <div className="relative w-full flex flex-col px-24 pt-10 pb-24 gap-8 items-center dark:bg-[#484148] text-white">
      <div className="absolute -top-16 right-40 ">
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
      <div className="font-inter font-normal text-3xl">
        {useTranslation("skills.title")}
      </div>
      <div className="flex gap-5">
        <div>
          <img className="rounded" src="/js-logo 1.png" />
          <p className="text-[#777777] dark:text-[#D9D9D9] text-center">
            JAVASCRIPT
          </p>
        </div>
        <div>
          <img className="rounded" src="/Rectangle 35.png" />
          <p className="text-[#777777] dark:text-[#D9D9D9] text-center">
            REACT
          </p>
        </div>
        <div>
          <img className="rounded" src="/Group 102.png" />
          <p className="text-[#777777] dark:text-[#D9D9D9] text-center">
            REDUX
          </p>
        </div>
        <div>
          <img className="rounded" src="/node-logo 1.png" />
          <p className="text-[#777777] dark:text-[#D9D9D9] text-center">NODE</p>
        </div>
        <div>
          <img className="rounded" src="/Group 101.png" />
          <p className="text-[#777777] dark:text-[#D9D9D9] text-center">
            VS CODE
          </p>
        </div>
        <div>
          <img className="rounded" src="/figma-logo 1.png" />
          <p className="text-[#777777] dark:text-[#D9D9D9] text-center">
            FIGMA
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
