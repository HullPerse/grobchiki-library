"use client";

import { GrobContext } from "@/components/providers/stateProvider";
import { useContext, useState } from "react";

import { ArrowBigRight, ArrowBigLeft, X } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Modal() {
  const {
    setPictureContent,
    pictureContent,
    openPicture,
    setOpenPicture,
    filter,
  } = useContext(GrobContext);

  return (
    <>
      {openPicture && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none ">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <section className="flex flex-col justify-center items-center z-10 max-sm:w-full max-sm:h-full max-sm:rounded-none w-fit bg-[#262626] p-2 rounded-md">
            <Image
              src={`/images/${pictureContent}`}
              placeholder="blur"
              blurDataURL={`placeholder.png`}
              width={0}
              height={0}
              draggable={false}
              sizes="100% 100%"
              className="w-full min-h-auto h-auto sm:h-[450px] max-h-[450px] rounded-md border-[2px] border-white/20"
              alt="book"
              loading="lazy"
            />

            <section className="flex flex-row w-full items-center justify-between mt-2">
              <div className="flex flex-col items-center justify-center gap-x-2 mr-4">
                Автор:
                <span className="text-base font-bold text-white text-lg font-bold hover:text-white/80 hover:underline hover:cursor-pointer">
                  {filter}
                </span>
              </div>
              <Button
                variant={"destructive"}
                className="flex items-center justify-center w-[50px] h-[50px] bg-red-600/50 hover:bg-red-700"
                onClick={() => {
                  setOpenPicture(!openPicture);
                  setPictureContent(null);
                }}
              >
                <X size={40} color="white" className="pointer-events-none" />
              </Button>
            </section>
          </section>
        </div>
      )}
    </>
  );
}
