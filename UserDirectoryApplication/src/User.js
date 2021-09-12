import React from "react";

const User = props => {
  const { fullName, country, dateofbirth, email, id } = props;
  const nth = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }
  const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"][new Date(dateofbirth).getMonth()];

  return (
    <a href={`/details/${id}`} className="user">
      <div className="image-container">
      </div>
      <div className="info">
      <h1>Full Name: {fullName}</h1>
      <h1>Country: {country}</h1>
      <h1>Date of birth: {new Date(dateofbirth).getDate()}<sup>{nth(new Date(dateofbirth).getDate())}</sup> {  month + ' ' + new Date(dateofbirth).getFullYear()}</h1>
      <h1>Email: {email}</h1>
      </div>
    </a>
  );
};

export default User;
