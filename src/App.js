import React, { Component } from "react";
import "./App.css";
import ButtonFetchFiveUsers from "./ButtonFetchFiveUsers";
import ButtonFetchNewUser from "./ButtonFetchNewUser";
import FiveUserList from "./FiveUserList";
import ExpandingUserList from "./ExpandingUserList";

const API_FIVE_USERS = "https://randomuser.me/api/?results=5";
const API_NEW_USER = "https://randomuser.me/api/?results=1";

class App extends Component {
  state = {
    five_users: null,
    new_user: [],
  };

  handleDataFetch = () => {
    fetch(API_FIVE_USERS)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          five_users: data.results,
        });
      })
      .catch((error) => console.log(error + " api doesn't work"));
  };

  handleDataFetchNewUser = () => {
    fetch(API_NEW_USER)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error(response.status);
      })
      .then((response) => response.json())
      .then((data) => {
        this.setState((prevState) => ({
          new_user: prevState.new_user.concat(data.results),
        }));
      })
      .catch((error) => console.log(error + " api doesn't work"));
  };
  render() {
    const five_users = this.state.five_users;
    const new_user = this.state.new_user;
    return (
      <div className="App">
        <div className="left-container">
          <ButtonFetchFiveUsers click={this.handleDataFetch} />
          {five_users ? <FiveUserList users={five_users} /> : five_users}
        </div>
        <div className="right-container">
          <ButtonFetchNewUser click={this.handleDataFetchNewUser} />
          {new_user.length >= 1 ? <ExpandingUserList users={new_user} /> : null}
        </div>
      </div>
    );
  }
}

export default App;
