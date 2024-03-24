import { GrobContext } from "@/providers/stateProvider";
import { useContext } from "react";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function Grob_Picture({ data }: { data: string }) {
  const { setPictureContent, setOpenPicture, filter } = useContext(GrobContext);

  return (
    <main
      className="flex flex-col w-[290px] h-[260px] rounded bg-black/50 border-[1px] border-white/10  overflow-hidden hover:cursor-pointer"
      onClick={() => {
        setPictureContent(data);

        setOpenPicture(true);
      }}
    >
      <LazyLoadImage
        src={`./src/images/${data}`}
        className="w-auto h-auto rounded mx-2 mt-2 border-[1px] border-white/10 transition-transform transform hover:scale-105 rounded"
      />

      <div className="inline-flex justify-between select-none">
        <p className="ml-2 text-white text-lg font-bold">{filter}</p>
        <p className="mr-2 text-white">{data.split(" - ")[0]}</p>
      </div>
    </main>
  );
}
