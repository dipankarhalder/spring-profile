import Image from "next/image";
import profilePic from "../../../public/avatar.jpg";

export const Profile = () => {
  return (
    <div className="flex flex-wrap w-full bg-white">
      <div className="w-[200px] flex-none">
        <span>
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={200}
            height={200}
          />
        </span>
      </div>
      <div className="flex flex-auto py-6 px-8">
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold mb-[8px]">Kartik Mandacille</h2>
          <h4 className="text-md font-medium">
            CEO Springworks, Ex Science, CS @Carnegie Mellon
          </h4>
          <h6 className="text-gray-400 text-sm font-normal">
            Bangalore, Karnataka, India
          </h6>
        </div>
        <div className=""></div>
      </div>
    </div>
  );
};
