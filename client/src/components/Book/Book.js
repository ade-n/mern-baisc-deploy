import React from "react";
import { Link } from "react-router-dom";

const Book = ({ books, showModal, deleteBook }) => {
  return (
    <tbody className="font-light">
      {books.map((item) => {
        return (
          <tr className="py-4 " key={item._id}>
            <td className="py-4 ">{item.book}</td>

            <td>{item.author}</td>
            <td className="py-4 ">
              <a href={item.link} target="_blank">
                {item.link}
              </a>
            </td>
            <td className="flex items-center h-12 ">
              <Link to={"/edit/" + item._id} id={item._id} onClick={showModal}>
                <svg
                  className="fill-current text-gray-700 inline-block h-4 w-4 mr-4 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.3 3.7l4 4L4 20H0v-4L12.3 3.7zm1.4-1.4L16 0l4 4-2.3 2.3-4-4z" />
                </svg>
              </Link>

              <div
                onClick={() => {
                  deleteBook(item._id);
                }}
                className="cursor-pointer"
              >
                <svg
                  class="fill-current text-gray-700 inline-block h-4 w-4 hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M6 2l2-2h4l2 2h4v2H2V2h4zM3 6h14l-1 14H4L3 6zm5 2v10h1V8H8zm3 0v10h1V8h-1z" />
                </svg>
              </div>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
};

export default Book;
