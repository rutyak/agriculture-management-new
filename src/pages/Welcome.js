import { Outlet } from "react-router-dom";

const Welcome = () => {
  const inputStyle =
    "w-full h-[50px] px-5 border border-gray-300 rounded-lg mb-4 shadow-sm transition-all focus:ring-4 focus:ring-purple-500";

  return (
    <div className="flex items-center justify-center w-full h-screen bg-gradient-to-r from-blue-500 to-purple-200">
      <div className="flex flex-col items-center bg-white shadow-2xl rounded-xl p-4 border border-purple-300 h-[95%] mobile:w-[90%] sm:w-[80%] md:h-[92%] md:w-[70%]  lg:w-[60%] lg:h-[85%]">
        <div className=" overflow-auto  flex flex-col relative mobile:w-[90%] md:w-[80%] lg:w-[70%]">
          <div className="flex items-center gap-3 pt-6 mobile:pt-0 md:pt-2 lg:pt-1">
            <p className="text-gray-400 text-md">My Application</p>
          </div>
          <Outlet context={{ inputStyle }} />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
