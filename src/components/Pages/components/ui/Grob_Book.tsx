"use client";

import Image from "next/image";

import { useContext } from "react";
import { GrobContext } from "@/components/providers/stateProvider";

export default function Grob_Book({ data }: any) {
  const { setOpenModule, setModuleContent, setFilter } =
    useContext(GrobContext);

  return (
    <main
      className="flex flex-col w-[290px] h-[260px] bg-black/50 border-[1px] border-white/10 rounded-md overflow-hidden hover:cursor-pointer"
      onClick={() => {
        setModuleContent(data);

        setOpenModule(true);
      }}
    >
      <Image
        src={`/images/${data.images["1"].url}`}
        placeholder="blur"
        blurDataURL={`/images/${data}`}
        alt="book"
        width={480}
        height={360}
        className="w-auto h-auto rounded mx-2 mt-2 border-[1px] border-white/10 transition-transform transform hover:scale-105"
        draggable={false}
        loading="lazy"
      />

      <div className="inline-flex justify-between select-none">
        <p
          className="ml-2 text-white text-lg font-bold hover:text-white/80 hover:underline"
          onClick={e => {
            e.stopPropagation();
            setFilter(data.author);
          }}
        >
          {data.author}
        </p>
        <p className="mr-2 text-white">{data.date}</p>
      </div>
    </main>
  );
}
