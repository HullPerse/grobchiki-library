import Book from "@/components/Pages/components/ui/Grob_Book";
import Picture from "@/components/Pages/components/ui/Grob_Picture";
import data from "@/BrokenPicturephone/data.json";
import { useContext, useEffect, useState } from "react";
import { GrobContext } from "@/components/providers/stateProvider";

export default function Grob_BrokenPicturephone() {
  const { filter } = useContext(GrobContext);
  const [filteredData, setFilteredData] = useState<(typeof data)[0][] | null>(
    null
  );

  const [pictureData, setPictureData] = useState<string[] | null>(null);

  useEffect(() => {
    const newData = Object.entries(data[0]).map(([key, value]) => value);

    const sortedData = newData.sort((a, b) => {
      const date_a = a.date.split(".").reverse().join("-");
      const date_b = b.date.split(".").reverse().join("-");
      return new Date(date_a).getTime() - new Date(date_b).getTime();
    });

    setFilteredData(sortedData as any);

    const pictures: string[] = [];

    // Iterate over each book data
    newData.forEach(bookData => {
      // Check if the book contains images
      if (bookData.images) {
        // Iterate over each image in the book
        Object.values(bookData.images).forEach(imageValue => {
          if (imageValue.author === filter) {
            pictures.push(imageValue.url);
          }
        });
      }
    });

    setPictureData(pictures);
  }, [filter]);

  if (filter)
    return (
      <section className="flex flex-row flex-wrap justify-center p-2 gap-x-4 gap-y-4">
        {pictureData
          ? pictureData.map((value, index) => (
              <Picture key={index} data={value} />
            ))
          : null}
      </section>
    );

  return (
    <section className="flex flex-row flex-wrap justify-center p-2 gap-x-4 gap-y-4">
      {filteredData
        ? filteredData.map((value, index) => <Book key={index} data={value} />)
        : null}
    </section>
  );
}
