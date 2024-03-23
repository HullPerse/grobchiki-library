import { GrobContext } from "@/components/providers/stateProvider";
import Image from "next/image";
import { useContext } from "react";

export default function Grob_Picture({ data }: any) {
  const { filter, setOpenPicture, setPictureContent } = useContext(GrobContext);

  return (
    <main
      className="flex flex-col w-[290px] h-[260px] bg-black/50 border-[1px] border-white/10 rounded-md overflow-hidden hover:cursor-pointer"
      onClick={() => {
        setPictureContent(data);

        setOpenPicture(true);
      }}
    >
      <Image
        src={`/images/${data}`}
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
        <p className="ml-2 text-white text-lg font-bold">{filter}</p>
        <p className="mr-2 text-white">{data.split(" - ")[0]}</p>
      </div>
    </main>
  );
}
