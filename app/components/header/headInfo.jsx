import Image from "next/image";
import profilePic from "../../../public/profile.png";

export const HeadInfo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-[12px]">Jobs</p>
      </div>
      <div className="flex items-center ml-[30px]">
        <p className="text-[12px]">Self verify</p>
      </div>
      <div className="flex items-center ml-[30px]">
        <i class="ri-circle-fill text-[7px] mr-[5px] top-[-2px] relative text-red-700"></i>
        <p className="text-[12px]">Verification</p>
        <i className="ri-arrow-down-s-line text-sm ml-1"></i>
      </div>
      <div className="flex items-center ml-[30px]">
        <span className="flex w-[24px] h-[24px] bg-gray-300 mr-2 rounded-full justify-center items-center">
          <i class="ri-eth-fill text-sm"></i>
        </span>
        <p className="text-[12px] text-gray-950">
          <span className="text-[12px] text-gray-500">Token - </span> 100
        </p>
        <i className="ri-arrow-down-s-line text-sm ml-1"></i>
      </div>
      <div className="flex items-center ml-[28px]">
        <i className="ri-messenger-line text-lg"></i>
      </div>
      <div className="flex items-center ml-[20px]">
        <i class="ri-notification-3-fill text-lg"></i>
      </div>
      <div className="flex items-center ml-[24px]">
        <span className="flex w-[30px] h-[30px]">
          <Image
            src={profilePic}
            alt="Picture of the author"
            width={30}
            height={30}
          />
        </span>
        <i className="ri-arrow-down-s-line text-sm ml-1"></i>
      </div>
    </div>
  );
};
