interface Image {
  author: string;
  url: string;
}

interface Entry {
  author: string;
  date: string;
  images: Image[];
  url: string;
}

type BookData = {
  author: string;
  date: string;
  images: Image[];
  url: string;
};

export interface FetchedBookDataUrl {
  images: Image[];
  url: string;
}

export type FetchedData = Entry[];
export type FetchedBookData = BookData;
