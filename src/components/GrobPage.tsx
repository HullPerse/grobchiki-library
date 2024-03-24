import { GrobContext } from "@/providers/stateProvider";
import { useContext, useEffect, useState } from "react";

import GrobBook from "@/components/Grob_Book";
import GrobPicture from "@/components/Grob_Picture";

import { FetchedData } from "@/api/GrobType";

export default function GrobPage() {
  const { filter } = useContext(GrobContext);

  const [filteredData, setFilteredData] = useState<FetchedData | null>(null);
  const [pictureData, setPictureData] = useState<string[] | null>(null);

  useEffect(() => {
    fetch("data.json")
      .then(response => response.json())
      .then((data: FetchedData) => {
        const newData = Object.entries(data[0]).map(([, value]) => value);

        const sortedData = newData.sort((a, b) => {
          const date_a = a.date.split(".").reverse().join("-");
          const date_b = b.date.split(".").reverse().join("-");
          return new Date(date_a).getTime() - new Date(date_b).getTime();
        });

        setFilteredData(sortedData);

        const pictures: string[] = [];

        const imageData = newData.filter(bookData => bookData.images);

        Object.entries(imageData).map(([, value]) => {
          Object.entries<{ author: string; url: string }>(value.images).map(
            image => {
              if (image["1"].author == filter) {
                pictures.push(image["1"].url);
              }
            }
          );
        });

        setPictureData(pictures);
      });
  }, [filter]);

  if (filter)
    return (
      <section className="flex flex-row flex-wrap justify-center p-2 gap-x-4 gap-y-4">
        {pictureData
          ? pictureData.map((value, index) => (
              <GrobPicture key={index} data={value} />
            ))
          : null}
      </section>
    );

  return (
    <section className="flex flex-row flex-wrap justify-center p-2 gap-x-4 gap-y-4">
      {filteredData
        ? Object.entries(filteredData).map(([, value], index) => (
            <GrobBook key={index} data={value} />
          ))
        : null}
    </section>
  );
}
