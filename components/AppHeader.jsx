import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  HomeIcon,
  UserIcon,
  PhoneIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";

export default function AppHeader() {
  return (
    <div className="bg-slate-700 p-6 select-none text-gray-300 flex flex-col justify-center sm:flex-row sm:justify-between md:items-center items-center">
      <div className="flex flex-wrap space-x-4 justify-center ">
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={InformationCircleIcon} title="About" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
      </div>
      <Image
        className="mt-6 sm:mt-0  md:mt-0"
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width={100}
        height={100}
        alt="IMDb LOGo"
      />
    </div>
  );
}
