function Footer() {
  return (
    <div className="w-full flex justify-center px-24 gap-10 pb-20 pt-10 dark:bg-[#484148] dark:text-white">
      <div className="font-inter font-normal text-3xl relative ">
        <img
          src="/Rectangle 40.png"
          alt=""
          className="absolute top-6 left-20 rounded-lg"
        />
        <p className="relative">
          Let's work together on <br />
          your first product.
        </p>
      </div>

      <div className="">
        <p className="text-[#1769FF] font-semibold dark:text-[#82BBFF]">
          Github
        </p>
        <p className="text-[#0A0A14] font-semibold relative dark:text-white">
          Personal Blog
        </p>
        <p className="text-[#0077B5] font-semibold dark:text-[#419CCB]">
          Linkedin
        </p>
        <p className="text-[#AF0C48] font-semibold dark:text-[#EA2678]">
          Email
        </p>
      </div>
    </div>
  );
}

export default Footer;
