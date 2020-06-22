import React, { Component } from "react";
import axios from "axios";

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: "",
      books: [],
    };
  }

  componentDidMount = () => {
    this.getData();
  };

  getData = () => {
    axios
      .get("/api")
      .then((res) => {
        this.setState({ books: res.data });
        console.log("all the data", res);
      })
      .catch((err) => {
        console.log("there is an error", err);
      });
  };

  handleTitle = (e) => {
    this.setState({ title: e.target.value });
  };

  handleBody = (e) => {
    this.setState({ body: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const array = {
      title: this.state.title,
      body: this.state.body,
    };

    axios
      .post("/api/add", array)
      .then((res) => {
        console.log("show me za data", res.data);
        this.resetUserInput();
        this.getData();
      })
      .catch((err) => {
        console.log("ooo an error", err);
      });
  };

  resetUserInput = () => {
    this.setState({
      title: "",
      body: "",
    });
  };

  displayBooks = (books) => {
    if (!books.length) return null;

    return books.map((book) => {
      return (
        <li className="flex" key={book._id}>
          <h3 className="font-bold pr-2">{book.title}</h3>
          <p>{book.body}</p>
        </li>
      );
    });
  };

  render() {
    const { title, body, books } = this.state;
    return (
      <div>
        <div className="text-blue-300">List of books</div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={title}
            onChange={this.handleTitle}
            placeholder="title"
          />
          <textarea
            type="text"
            placeholder="body"
            value={body}
            onChange={this.handleBody}
          />
          <button type="submit">Submit</button>
        </form>
        <ul>{this.displayBooks(books)}</ul>
      </div>
    );
  }
}

export default App;
