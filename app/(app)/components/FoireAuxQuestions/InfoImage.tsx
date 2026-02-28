import React from "react";
import Image from "next/image";
import Info from "@/public/FoireAuxQuestions/info.png";

function InfoImage() {
  return (
    <div className=" md:w-[34vw]  2xl:w-[50%] overflow-hidden rounded-lg sm:rounded-xl">
      <Image
        src={Info}
        alt="Information about frequently asked questions"
        className="w-full h-auto block"
        priority={false}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 80vw"
      />
    </div>
  );
}

export default InfoImage;
