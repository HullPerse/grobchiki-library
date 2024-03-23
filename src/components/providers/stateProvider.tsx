"use client";

import { createContext, useState } from "react";

type GrobContextType = {
  filter: string | null;
  setFilter: (value: string | null) => void;

  openModule: boolean;
  setOpenModule: (value: boolean) => void;

  moduleContent: { images?: Record<string, any>; url?: string }; // <-- change here
  setModuleContent: (value: {
    images: Record<string, any>;
    url: string;
  }) => void; // <-- and here

  openPicture: boolean;
  setOpenPicture: (value: boolean) => void;

  pictureContent: string | null;
  setPictureContent: (value: string | null) => void;
};

const initialFilterState: GrobContextType = {
  filter: null,
  setFilter: (value: string | null) => {
    value;
  },

  openModule: false,
  setOpenModule: (value: boolean) => {
    value;
  },

  moduleContent: {},
  setModuleContent: (value: object) => {
    value;
  },

  openPicture: false,
  setOpenPicture: (value: boolean) => {
    value;
  },

  pictureContent: null,
  setPictureContent: (value: string | null) => {
    value;
  },
};

const GrobContext = createContext<GrobContextType>(initialFilterState);

const GrobProvider = ({ children }: { children: React.ReactNode }) => {
  const [filter, setFilter] = useState(initialFilterState.filter);

  const [openModule, setOpenModule] = useState(initialFilterState.openModule);

  const [moduleContent, setModuleContent] = useState(
    initialFilterState.moduleContent
  );

  const [openPicture, setOpenPicture] = useState(
    initialFilterState.openPicture
  );

  const [pictureContent, setPictureContent] = useState(
    initialFilterState.pictureContent
  );

  return (
    <GrobContext.Provider
      value={{
        filter,
        setFilter,

        openModule,
        setOpenModule,

        moduleContent,
        setModuleContent,

        openPicture,
        setOpenPicture,

        pictureContent,
        setPictureContent,
      }}
    >
      {children}
    </GrobContext.Provider>
  );
};

export { GrobProvider, GrobContext };
