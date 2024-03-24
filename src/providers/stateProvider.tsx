import React, { createContext, useState } from "react";

import { FetchedBookDataUrl } from "@/api/GrobType";

type GrobContextProvider = {
  filter: string | null;
  setFilter: (value: string | null) => void;

  openModal: boolean;
  setOpenModal: (value: boolean) => void;

  modalContent: FetchedBookDataUrl | null;
  setModalContent: (value: FetchedBookDataUrl | null) => void;

  pictureContent: string | null;
  setPictureContent: (value: string | null) => void;

  openPicture: boolean;
  setOpenPicture: (value: boolean) => void;
};

const initialFilterState: GrobContextProvider = {
  filter: null,
  setFilter: () => {},

  openModal: false,
  setOpenModal: () => {},

  modalContent: null,
  setModalContent: () => {},

  pictureContent: null,
  setPictureContent: () => {},

  openPicture: false,
  setOpenPicture: () => {},
};

const GrobContext = createContext<GrobContextProvider>(initialFilterState);

const GrobProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState<string | null>(null);
  const [openModal, setOpenModal] = useState(false);

  const [modalContent, setModalContent] = useState<FetchedBookDataUrl | null>(
    null
  );

  const [pictureContent, setPictureContent] = useState<string | null>(null);
  const [openPicture, setOpenPicture] = useState(false);

  return (
    <GrobContext.Provider
      value={{
        filter,
        setFilter,

        openModal,
        setOpenModal,

        modalContent,
        setModalContent,

        pictureContent,
        setPictureContent,

        openPicture,
        setOpenPicture,
      }}
    >
      {children}
    </GrobContext.Provider>
  );
};

export { GrobProvider, GrobContext };
