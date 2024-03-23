"use client";

import { Label } from "@/components/ui/label";

import { useContext } from "react";
import { GrobContext } from "@/components/providers/stateProvider";

export default function GrobNavbar() {
  const { filter, setFilter } = useContext(GrobContext);

  return (
    <nav className="inline-flex bg-black/60 h-[70px] border-b-2 border-white/20 text-white text-base font-bold">
      <span className="flex flex-col items-center justify-center mx-2 gap-2">
        Автор:
        <div className="flex justify-center items-center max-w-full">
          <Label
            className="hover:cursor-pointer border-transparent bg-primary text-primary-foreground hover:bg-red-800/40 min-w-[100px] w-fit max-w-auto text-center py-2 rounded-sm"
            onClick={() => setFilter(null)}
          >
            {filter ? filter : "Все"}
          </Label>
        </div>
      </span>
    </nav>
  );
}
