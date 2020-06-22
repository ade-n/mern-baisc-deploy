import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import CreateNewBook from "../components/CreateNewBook";
import BooksListRight from "../components/BooksListRight";
import Modal from "../components/Modal";
import PageNotFound from "../components/Error/PageNotFound";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
    window.location = "/";
  };

  render() {
    return (
      <Router>
        <div className="md:flex md:justify-between w-full ">
          <div
            style={{
              backgroundColor: "#f3c623",
            }}
            className="md:px-6 px-12 mx-auto  md:h-screen md:w-1/4 w-full"
          >
            <CreateNewBook />
          </div>
          <div
            style={{
              borderRadius: "100px 0px 0px 0px",
              backgroundColor: "#f4f6ff",
            }}
            className="md:w-3/4 w-full h-screen"
          >
            <BooksListRight showModal={this.showModal} />
          </div>
        </div>

        <Switch>
          <Route exact path="/" />
          <Route
            path="/edit/:id"
            render={(props) => (
              <Modal
                {...props}
                handleClose={this.hideModal}
                show={this.state.show}
              />
            )}
          />
          <Route component={PageNotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
