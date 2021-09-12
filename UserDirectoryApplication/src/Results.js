import React from "react";
import User from "./User";

const Results = ({ users }) => {
  return (
    <div className="search">
      {!users.length ? (
        <h1>No User Found</h1>
      ) : (
        users.map(user => {
          return (
            <User
              fullName={user['Full Name']}
              key={user.Id}
              country={user.Country}
              dateofbirth={user['Date of birth']}
              email={user.Email}
              id={user.Id}
            />
          );
        })
      )}
    </div>
  );
};

export default Results;
