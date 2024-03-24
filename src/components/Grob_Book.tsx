import { useContext } from "react";
import { FetchedBookData } from "@/api/GrobType";
import { GrobContext } from "@/providers/stateProvider";

import { LazyLoadImage } from "react-lazy-load-image-component";

export default function GrobNavBar({ data }: { data: FetchedBookData }) {
  const { setOpenModal, setModalContent, setFilter } = useContext(GrobContext);

  return (
    <main
      className="flex flex-col w-[290px] h-[260px] bg-black/50 border-[1px] border-white/10 rounded overflow-hidden hover:cursor-pointer"
      onClick={() => {
        setModalContent(data);

        setOpenModal(true);
      }}
    >
      <LazyLoadImage
        src={`./src/images/${data.images["1"].url}`}
        alt={data.author}
        className="w-auto h-auto rounded mx-2 mt-2 border-[1px] border-white/10 transition-transform transform hover:scale-105"
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
