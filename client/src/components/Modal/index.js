import React from "react";
import axios from "axios";

import InputField from "../Reusable/InputField";
import ButtonSubmit from "../Reusable/ButtonSubmit";

class Modal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book: "",
      author: "",
      link: "",
    };
  }

  componentDidMount() {
    axios
      .get("/api/" + this.props.match.params.id)
      .then((res) => {
        console.log("get", res.data);
        this.setState({
          book: res.data.book,
          author: res.data.author,
          link: res.data.link,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  //handle edit properties
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

    console.log("console changes", books);

    axios
      .put("/api/update/" + this.props.match.params.id, books)
      .then((res) => console.log("edit log", res.data));

    window.location = "/";
  };

  render() {
    const { book, author, link } = this.state;
    const { handleClose, show } = this.props;

    const showHideClassName = show
      ? " fixed top-0 left-0 h-full bg-gray-200 bg-opacity-75  w-full block "
      : " fixed top-0 left-0 h-full bg-gray-200 bg-opacity-75   w-full hidden";
    return (
      <div className={showHideClassName}>
        <div
          style={{
            backgroundColor: "#f3c623",
          }}
          className=" w-1/4  mx-auto bottom-0 top-0 mt-24 shadow-lg"
        >
          <div
            className="cursor-pointer text-gray-700  p-4 font-bold float-right hover:text-white"
            onClick={handleClose}
          >
            X
          </div>
          <div className="p-12">
            <div className="uppercase text-xl py-8 font-medium text-gray-700">
              Edit book
            </div>

            <form onSubmit={this.handleSubmit}>
              <InputField
                htmlFor="book"
                onChange={this.onChangeBook}
                value={book}
                label="Edit book name"
              />

              <InputField
                htmlFor="author"
                onChange={this.onChangeAuthor}
                value={author}
                label="Edit author"
              />

              <InputField
                htmlFor="link"
                onChange={this.onChangeLink}
                value={link}
                label="Update Link"
              />

              <ButtonSubmit value="Edit book log" name="Update" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
