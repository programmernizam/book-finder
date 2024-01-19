import { useState } from "react";
import { bookData } from "../utils/bookData";
import BookCard from "./BookCard";
import SearchBox from "./SearchBox";

export default function BookBoard() {
  const [books, setBooks] = useState(bookData);
  const handleSearch = (searchTerm) => {
    const filteredBook = books.filter((book) =>
      book.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
    );
    setBooks([...filteredBook]);
  };
  return (
    <main className="my-10 lg:my-14">
      <SearchBox onSearch={handleSearch} />
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </main>
  );
}
