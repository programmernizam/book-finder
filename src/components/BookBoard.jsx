import { useState } from "react";
import { bookData } from "../utils/bookData";
import BookCard from "./BookCard";
import SearchBox from "./SearchBox";

export default function BookBoard() {
  const [books, setBooks] = useState([...bookData]);
  const handleSearch = (searchTerm) => {
    if (searchTerm !== "") {
      setBooks(
        bookData?.filter((book) =>
          book?.title?.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setBooks([...bookData]);
    }
  };

  // Handler Sort Books
  const handleSortBooks = (sortTerm) => {
    if (sortTerm !== "") {
      if (sortTerm === "name_asc") {
        const AscendingBooksAra = books
          .slice()
          .sort((a, b) => a.title.localeCompare(b.title));
        setBooks(AscendingBooksAra);
      } else if (sortTerm === "name_desc") {
        const DescendingBooksAra = books
          .slice()
          .sort((a, b) => b.title.localeCompare(a.title));
        setBooks(DescendingBooksAra);
      } else if (sortTerm === "year_asc") {
        const ascendingBooksWithPublishYear = books
          ?.slice()
          .sort((a, b) => a.publishedYear - b.publishedYear);
        setBooks(ascendingBooksWithPublishYear);
      } else if (sortTerm === "year_desc") {
        const descendingBooksWithPublishYear = books
          .slice()
          .sort((a, b) => b.publishedYear - a.publishedYear);
        setBooks(descendingBooksWithPublishYear);
      }
    } else {
      setBooks([...bookData]);
    }
  };
  return (
    <main className="my-10 lg:my-14">
      <SearchBox onSearch={handleSearch} onSort={handleSortBooks} />
      <div className="container mx-auto grid grid-cols-1 gap-8 max-w-7xl md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))} 
      </div>
    </main>
  );
}
