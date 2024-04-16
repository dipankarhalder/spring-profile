import { Search } from "./search";
import { HeadInfo } from "./headInfo";

export const Header = () => {
  return (
    <div className="w-full shadow-lg py-3 bg-white">
      <div className="container max-w-7xl mx-[auto] flex justify-between items-center">
        <div className="flex justify-between items-center">
          <h1 className="font-semibold text-lg text-blue-700 mr-[3rem]">
            SpringProfile
          </h1>
          <Search />
        </div>
        <div className="flex justify-between items-center">
          <HeadInfo />
        </div>
      </div>
    </div>
  );
};
