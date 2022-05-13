import React from "react";
import { Link } from "react-router-dom";
import { useStore } from "../store";
import { ekle } from "../store/book/bookActions";

const Products = () => {
  const { bookState, dispatchBook } = useStore();
  const { cart, bookList } = bookState;

  const toplSayi = cart.reduce(
    (total, book) => (total = total + book.count),
    0
  );

  return (
    <div>
      <h2>
        {" "}
        <span>Kitap Listesi</span>
        <Link to="/cart">Sepetim({toplSayi})</Link>
      </h2>
      {bookList.map((book) => (
        <div className="book" key={book.id}>
          <img src={book.image} alt={book.name} />
          <div>
            <p>Yazar:{book.author}</p>
            <p>Fiyat:{book.price}</p>
            <button onClick={() => dispatchBook(ekle(book))}>
              Sepete Ekle
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
