function Projects() {
  return (
    <div className="w-full flex justify-center px-24 gap-10 pb-20 pt-10 dark:text-white dark:bg-[#484148]">
      <div className="w-full md:w-2/3">
        <p className="font-inter font-normal text-3xl text-center mb-10">
          Projects
        </p>
        <div className="flex justify-center gap-10">
          <div className="w-1/2 bg-[#DDEEFE] rounded-lg pt-8 px-6 dark:bg-[#2D3235]">
            <h2 className="font-bold font-PlayfairDisplay text-2xl">
              Random Jokes
            </h2>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              similique, sit facilis nesciunt natus, quidem, odit ipsam omnis et
              magni quibusdam aliquam neque porro id recusandae quo amet fugiat
              rem?
            </p>
            <span className="bg-white rounded-full px-3 mr-2 text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              react
            </span>
            <span className="bg-white rounded-full px-3 mr-2  text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              vercel
            </span>
            <span className="bg-white rounded-full  px-3  text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              axios
            </span>
            <br />
            <span className="bg-white rounded-full px-3  text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              router
            </span>
            <div className="flex justify-between pt-4">
              <span className="font-semibold">View on Github</span>
              <span className="font-semibold">Go to app → </span>
            </div>
            <img className="relative -bottom-20" src="/Group 103.svg" alt="" />{" "}
          </div>
          <div className=" w-1/2 bg-[#D9F6F1] rounded-lg pt-8 px-6 dark:bg-[#495351]">
            <h2 className="font-bold font-PlayfairDisplay text-2xl">
              Are you bored?
            </h2>
            <p className="py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              similique, sit facilis nesciunt natus, quidem, odit ipsam omnis et
              magni quibusdam aliquam neque porro id recusandae quo amet fugiat
              rem?Lorem ipsum dolor sit amet consectetur adipisicing elit. At
              nisi tempora nihil vitae
            </p>
            <span className="bg-white rounded-full px-3 mr-2 text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              react
            </span>
            <span className="bg-white rounded-full px-3 mr-2 text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              redux
            </span>
            <span className="bg-white rounded-full  px-3 text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              axios
            </span>
            <br />
            <span className="bg-white rounded-full px-3 mr-2 text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              router
            </span>
            <span className="bg-white rounded-full px-3 text-sm font-bold font-PlayfairDisplay dark:bg-[#525252] dark:text-white">
              vercel
            </span>
            <div className="flex justify-between pt-4 ">
              <span className="font-semibold">View on Github</span>
              <span className="font-semibold">Go to app → </span>
            </div>
            <img className="relative -bottom-8" src="/Frame 104.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
