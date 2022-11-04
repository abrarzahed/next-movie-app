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
    <div>
      <div>
        <HeaderIcon Icon={HomeIcon} title="Home" />
        <HeaderIcon Icon={UserIcon} title="Account" />
        <HeaderIcon Icon={InformationCircleIcon} title="About" />
        <HeaderIcon Icon={PhoneIcon} title="Contact" />
      </div>
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/6/69/IMDB_Logo_2016.svg"
        width={100}
        height={100}
        alt="IMDb LOGo"
      />
    </div>
  );
}
