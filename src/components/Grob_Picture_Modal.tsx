import { GrobContext } from "@/providers/stateProvider";
import { useContext } from "react";

import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LazyLoadImage } from "react-lazy-load-image-component";

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
          <section className="flex flex-col justify-center items-center z-10 max-sm:w-full max-sm:h-full max-sm:rounded-none w-fit bg-[#262626] p-2 rounded">
            <LazyLoadImage
              src={`images/${pictureContent}`}
              className="w-full min-h-auto h-auto sm:h-[450px] max-h-[450px] rounded border-[2px] border-white/20"
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
                className="flex items-center justify-center w-[50px] h-[50px] bg-red-600/50 hover:bg-red-700 rounded"
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
