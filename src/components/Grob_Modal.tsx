import { useContext, useState } from "react";
import { GrobContext } from "@/providers/stateProvider";

import { LazyLoadImage } from "react-lazy-load-image-component";

import { ArrowBigLeft, ArrowBigRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Modal() {
  const { openModal, setOpenModal, modalContent, setModalContent, setFilter } =
    useContext(GrobContext);

  const [currentImage, setCurrentImage] = useState(1);

  const contentLength = Object.keys(
    modalContent?.images ? modalContent.images : {}
  ).length;

  return (
    <>
      {openModal && (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none ">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
          <section className="flex flex-col justify-center items-center z-10 max-sm:w-full max-sm:h-full max-sm:rounded-none w-fit bg-[#262626] p-2 rounded">
            <LazyLoadImage
              src={`./src/images/${
                modalContent?.images
                  ? modalContent.images[currentImage].url
                  : null
              }`}
              className="w-full min-h-auto h-auto sm:h-[450px] max-h-[450px] rounded border-[2px] border-white/20"
            />

            <section className="flex flex-row w-full items-center justify-between">
              <div className="inline-flex items-center w-full h-[50px] rounded-b mt-2">
                <Button
                  variant={"secondary"}
                  className="bg-black/40 hover:bg-white/10 h-[50px] w-[50px] rounded"
                  disabled={currentImage == 1}
                  onClick={() => setCurrentImage(currentImage - 1)}
                >
                  <ArrowBigLeft
                    size={40}
                    color="white"
                    className="pointer-events-none"
                  />
                </Button>

                <p className="text-white font-bold mx-2 text-center min-w-[40px] max-w-[40px]">
                  {currentImage}/{contentLength}
                </p>

                <Button
                  variant={"secondary"}
                  className="bg-black/40 hover:bg-white/10 h-[50px] w-[50px] rounded"
                  disabled={currentImage == contentLength}
                  onClick={() => setCurrentImage(currentImage + 1)}
                >
                  <ArrowBigRight
                    size={40}
                    color="white"
                    className="pointer-events-none"
                  />
                </Button>
              </div>

              <div className="flex flex-col items-center justify-center gap-x-2 mr-4">
                Автор:
                <span
                  className="text-base font-bold text-white text-lg font-bold hover:text-white/80 hover:underline hover:cursor-pointer "
                  onClick={e => {
                    e.stopPropagation();
                    setFilter(
                      modalContent?.images
                        ? modalContent.images[currentImage].author
                        : null
                    );
                    setOpenModal(false);
                  }}
                >
                  {modalContent?.images
                    ? modalContent.images[currentImage].author
                    : null}
                </span>
              </div>
              <Button
                variant={"destructive"}
                className="flex items-center justify-center w-[50px] h-[50px] bg-red-600/50 hover:bg-red-700 rounded"
                onClick={() => {
                  setOpenModal(!openModal);
                  setModalContent({
                    images: [],
                    url: "",
                  });

                  setCurrentImage(1);
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
