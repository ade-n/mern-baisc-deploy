import React, { Component } from "react";
import axios from "axios";
import Books from "../components/Images/Books";

import InputField from "./Reusable/InputField";
import ButtonSubmit from "./Reusable/ButtonSubmit";

export class CreateNewBook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "",
      author: "",
      link: "",
      books: [],
    };
  }

  onChangeBook = (e) => {
    this.setState({
      book: e.target.value,
    });
  };

  onChangeAuthor = (e) => {
    this.setState({
      author: e.target.value,
    });
  };

  onChangeLink = (e) => {
    this.setState({
      link: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const books = {
      book: this.state.book,
      author: this.state.author,
      link: this.state.link,
    };
    console.log("show books", books);

    axios.post("/api/add", books).then((res) => {
      console.log("add data", res.data);
    });
    window.location = "/";
  };

  render() {
    const { book, author, link } = this.state;
    return (
      <form
        className="flex flex-col justify-between h-full"
        onSubmit={this.handleSubmit}
      >
        <div className="w-3/4">
          <div className="uppercase text-xl pt-16 font-medium text-gray-700">
            Add New Book
          </div>

          <div>
            <svg
              className="stroke-current  inline-block h-24 w-24 border rounded-full border-black p-6 my-12"
              viewBox="0 0 100.000000 100.000000"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              strokeWidth="1"
            >
              <Books />
            </svg>
          </div>

          <InputField
            htmlFor="book"
            placeholder="The Witcher - max.24 characters"
            onChange={this.onChangeBook}
            value={book}
            label="Book"
          />

          <InputField
            htmlFor="author"
            placeholder="A. Sapkowski - max.24 characters"
            onChange={this.onChangeAuthor}
            value={author}
            label="Author"
          />

          <InputField
            htmlFor="link"
            placeholder="https://www.amazon.co.uk/..."
            onChange={this.onChangeLink}
            value={link}
            label="Link"
          />
        </div>
        <ButtonSubmit name=" Create New" />
      </form>
    );
  }
}

export default CreateNewBook;
