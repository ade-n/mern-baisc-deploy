import React, { Component } from "react";
import axios from "axios";
import Book from "./Book/Book";

export class BooksListRight extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showEdit: false,
      showId: null,
    };
  }

  componentDidMount() {
    axios
      .get("/api")
      .then((res) => {
        console.log("books list", res);
        this.setState({
          books: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //handle delete button
  handleDelete = (id) => {
    axios.delete("/api/" + id).then((response) => {
      console.log("delete item", response.data);
    });

    this.setState({
      books: this.state.books.filter((el) => el._id !== id),
    });
  };

  //handle hidden edit properties
  handleShow = (event) => {
    console.log(event.target.id);
    const books = this.state.books;
    const bookId = event.target.id; // how to access the id?

    for (let index = 0; index < books.length; index++) {
      if (bookId === books[index]._id) {
        books[index].show = !books[index].show; //toggle the element
      }
    }
    this.setState({ books });
  };

  render() {
    const { books } = this.state;
    const { showModal } = this.props;

    const booksNo = books.length;

    return (
      <div className="px-24">
        <div
          style={{ color: "#f3c623" }}
          className="font-bold pt-16 text-white text-5xl "
        >
          List of books
        </div>
        <div className="pb-12 text-gray-600">You have {booksNo} new books</div>
        <table className="w-full  pl-2">
          <thead className="border-b-2 border-white text-left">
            <tr className="pl-2">
              <th className="w-1/4 py-4 text-gray-700">Title</th>
              <th className="w-1/4 py-4 text-gray-700">Author</th>
              <th className="w-1/4 py-4 text-gray-700">Links</th>
              <th className="w-1/4 py-4 text-gray-700" />
            </tr>
          </thead>

          <Book
            showModal={showModal}
            books={books}
            handleShow={this.handleShow}
            deleteBook={this.handleDelete}
          />
        </table>
      </div>
    );
  }
}

export default BooksListRight;

//"linear-gradient(to top, #f5f7fa, #c3cfe2)"
