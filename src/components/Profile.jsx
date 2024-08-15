function Profile() {
  return (
    <div className="relative w-full bg-[#F5F5F5] px-24 dark:text-white dark:bg-[#2A262B] ">
      <img
        src="/Ellipse 12.png"
        alt="ellipsis"
        className="absolute -top-8 right-0 "
      />

      <div className="font-inter font-normal text-3xl text-center mb-10 pt-10">
        Profile
      </div>

      <div className="flex justify-center gap-10 ">
        <div className="bg-white w-1/2 mb-10 pl-4 rounded-lg dark:bg-[#525252]">
          <h2 className="font-PlayfairDisplay text-[#EA2678] font-thin my-4">
            Basic Information
          </h2>
          <div className="grid grid-cols-2 gap-y-2  ">
            <span className="dark:text-white font-medium text-gray-700">
              Doğum Tarihi
            </span>
            <span>03.06.1999</span>

            <span className=" dark:text-white font-medium text-gray-700">
              İkamet Şehri
            </span>
            <span>İzmir</span>

            <span className="dark:text-white font-medium text-gray-700">
              Eğitim Durumu
            </span>
            <span>İzmir Institute of Technology, 2024</span>

            <span className="dark:text-white font-medium text-gray-700 mb-4">
              Tercih Ettiği Rol
            </span>
            <span>Frontend UI</span>
          </div>
        </div>

        <div className="w-1/2 relative">
          <img
            src="/Rectangle 39.png"
            alt=""
            className="absolute top-8 rounded-md"
          />
          <h2 className="font-PlayfairDisplay my-4 pl-4 relative text-lg">
            About me
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
            neque, excepturi sed blanditiis accusamus odio quidem distinctio
            dicta architecto maiores obcaecati nesciunt dolorem tempora quas
            quam error? Iure, sapiente alias!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
