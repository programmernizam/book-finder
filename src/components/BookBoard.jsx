import { useState } from "react";
import { bookData } from "../utils/bookData";
import SearchBox from "./SearchBox";

export default function BookBoard() {
  const [books, setBooks] = useState([bookData]);
  return (
    <main className="my-10 lg:my-14">
      <SearchBox />
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"></div>
    </main>
  );
}
