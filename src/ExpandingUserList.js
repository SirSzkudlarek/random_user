import React from "react";
import "./ExpandingUserList.css";

const ExpandingUserList = (props) => {
  const users = props.users.map((user) => (
    <div className="user-container" key={user.login.uuid}>
      <img src={user.picture.large} alt={user.name.last}></img>
      <div>
        <h4>{`${user.name.title} ${user.name.last}`}</h4>
        <p>{user.email}</p>
      </div>
    </div>
  ));
  return <ul>{users}</ul>;
};

export default ExpandingUserList;
