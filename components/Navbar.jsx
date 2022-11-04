import requests from "../utilities/requests";
import { useRouter } from "next/router";
export default function Navbar() {
  const router = useRouter();
  return (
    <div className="flex items-center justify-center py-3 px-6 bg-slate-600 text-xl lg:text-3xl text-gray-300 space-x-6 md:space-x-32 cursor-pointer ">
      {Object.entries(requests).map(([key, { title, url }], i) => (
        <h1
          onClick={() => router.push(`?genre=${key}`)}
          className="hover:text-white font-bold active:text-red-600"
          key={i}
        >
          {title}
        </h1>
      ))}
    </div>
  );
}
