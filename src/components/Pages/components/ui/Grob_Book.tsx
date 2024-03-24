"use client";

import { useContext } from "react";
import { GrobContext } from "@/components/providers/stateProvider";

import { LazyLoadImage } from "react-lazy-load-image-component";

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
      <LazyLoadImage
        src={`../../../../images/${data.images["1"].url}`}
        className="w-auto h-auto rounded mx-2 mt-2 border-[1px] border-white/10 transition-transform transform hover:scale-105"
        draggable={false}
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
