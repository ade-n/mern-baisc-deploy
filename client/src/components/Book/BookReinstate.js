import React from "react";
import EditBook from "./EditBook";

const Book = ({ books, handleShow, deleteBook }) => {
  return (
    <tbody className="font-light">
      {books.map((item) => {
        return (
          <tr className="py-4 " key={item._id}>
            <td className="py-4">
              <td>{item.book}</td>
            </td>

            <td>{item.author}</td>
            <td>{item.link}</td>
            <td className="flex items-center h-12 ">
              <div
                id={item._id}
                onClick={handleShow}
                style={{
                  backgroundColor: "#fbd46d",
                }}
                className="rounded font-bold px-2 text-white mr-2"
              >
                E
              </div>

              <div
                onClick={() => {
                  deleteBook(item._id);
                }}
                style={{
                  backgroundColor: "#ff9c71",
                }}
                className="rounded font-bold  px-2 text-white mr-2 cursor-pointer"
              >
                X
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Book;

/*
{item.show ? (
  <EditBook
    book={book}
    author={author}
    link={link}
    onChangeBook={onChangeBook}
    onChangeAuthor={onChangeAuthor}
    onChangeLink={onChangeLink}
  />
) : null}
*/
