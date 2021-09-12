import React from "react";
import axios from 'axios';


class Details extends React.Component {
  state = { loading: true};
  componentDidMount() {
  axios.get('http://localhost:5000/users', { params: {Id: this.props.id} }) 
    .then(response =>{
      this.setState({
        fullName : response.data[0]['Full Name'],
        key: response.data[0].Id,
        country: response.data[0].Country,
        email: response.data[0].Email,
        dob: response.data[0]['Date of birth'],
        loading: false
      })})
  }
  render() {
    if (this.state.loading) {
      return <h1>loading … </h1>;
    }

    const { fullName, country, email , dob } = this.state;

    return (
      <form className="details">
        <div>
        <input
            id="fullName"
            value={fullName}
            placeholder="full name"
            onChange={e => {e}}
          />
        </div>
        <div>
        <input
            id="country"
            value={country}
            placeholder="country"
            onChange={e => {e}}
          />
        </div>
        <div>
        <input
            id="email"
            value={email}
            placeholder="email"
            onChange={e => {e}}
          />
        </div>
        <div>
        <input
            id="dob"
            value={dob}
            placeholder="Date Of birth"
            onChange={e => {e}}
          />
        </div>
        <button>Save</button>
      </form>
    );
  }
}

export default Details;