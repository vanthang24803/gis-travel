"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const NavigationLogo = () => {
  const router = useRouter();
  return (
    <div
      className="flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center bg-background dark:bg-neutral-700 group-hover:bg-emerald-500 "
      onClick={() => router.push("/")}
    >
      <Image
        width={48}
        height={48}
        src="/imgs/logo.svg"
        alt="logo"
        className="object-fill w-full hover:cursor-pointer"
      />
    </div>
  );
};

export default NavigationLogo;
