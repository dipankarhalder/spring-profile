import Image from "next/image";
import Link from "next/link";
import profilePic from "../../../public/avatar.jpg";

export const HeadInfo = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <p className="text-[12px]">Jobs</p>
      </div>
      <div className="flex items-center ml-[30px]">
        <p className="text-[12px]">Self verify</p>
      </div>
      <div className="flex items-center ml-[30px] relative">
        <i className="ri-circle-fill text-[7px] mr-[4px] top-[-4px] relative text-red-700"></i>
        <p className="text-[12px]">Verification</p>
        <i className="ri-arrow-down-s-line text-sm ml-1"></i>
        <div className="absolute top-[100%] right-0 w-[150px] shadow-lg rounded pt-5 hidden">
          <ul className="flex flex-col bg-white">
            <li className="px-3 py-1">
              <Link href="/">
                <i className="ri-user-follow-line"></i>
                <span className="text-[12px]">My Verification</span>
              </Link>
            </li>
            <li className="px-3 py-1">
              <Link href="/">
                <i className="ri-user-add-line"></i>
                <span className="text-[12px]">Verification Request</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex items-center ml-[30px]">
        <span className="flex w-[24px] h-[24px] bg-gray-300 mr-2 rounded-full justify-center items-center">
          <i className="ri-eth-fill text-sm"></i>
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
        <i className="ri-circle-fill text-[7px] mr-[-2px] top-[-6px] relative text-red-700"></i>
        <i className="ri-notification-3-fill text-lg"></i>
      </div>
      <div className="flex items-center ml-[24px]">
        <span className="flex w-[30px] h-[30px] rounded-3xl overflow-hidden">
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
