import * as React from "react";
import UserCard from "./UserCard"
import axios from 'axios'

interface AppState {
  loaded: boolean;
  error: boolean;
  name: string;
  phone: string;
  email: string;
  picture: string;
  country: string;
}

// used by axios to fetch data from the DRF api
const profile_url = "/api/profile/"
const import_profile_url = "/api/import-profile/"
const error_msg: string = "You need to import a profile first!";


export class App extends React.Component {
  state: AppState = {
    loaded: false,
    name: "",
    phone: "",
    email: "",
    picture: "",
    country: "",
    error: false,
  }

  // manage both creation and retrieve from model
  handleBtnClick = (event: any): void => {
    axios.get(event.target.value)
      .then(res => {
        const profile = res.data;
        if (profile.name === "") {
          this.setState(
            {
              error: true
            }
          )
          return
        }
        this.setState(
          {
            name: profile.name,
            email: profile.email,
            phone: profile.phone,
            picture: profile.picture,
            country: profile.country,
            loaded: true,
            error: false,
          }
        );
      })
      .catch(function(error) {
        console.log(error);
      })
  };

  render() {
    const { error } = this.state
    return (
      <div >
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <h1 className="text-center my-4">Hello, check our amazing profile!</h1>
          </div>
        </div>
        <div className="row justify-content-md-center">
          <div className="col-md-8">
            <UserCard {...this.state} />
            {/* <UserCard name={name} phone={phone} email={email} picture={picture} loaded={loaded} country={country} /> */}
          </div>
        </div>
        {error === true ? <div className="mt-4 mb-2 justify-content-md-center row"> <div className="col-md-8 text-center"><div className="alert alert-danger" role="alert"> {error_msg} </div> </div></div> : null}

        <div className="row justify-content-md-center mt-4">
          <div className="col-md-4 mb-md-0 mb-2">
            <button onClick={this.handleBtnClick} value={import_profile_url} className="btn btn-block btn-outline-secondary">Import a new profile</button>
          </div>
          <div className="col-md-4">
            <button onClick={this.handleBtnClick} value={profile_url} className="btn btn-block btn-outline-secondary">Get a random profile</button>
          </div>
        </div>
      </div>)
  }
}
