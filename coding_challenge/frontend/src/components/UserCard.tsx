import * as React from "react";
import CardText from "./CardText"

// Some style
const imgStyle = {
  borderRadius: '50%',
  height: '150px',
  width: '150px',
};

interface UserProps {
  name: string;
  email: string;
  phone: string;
  picture: string;
  country: string;
  loaded: boolean
}

export interface ProfileContent {
  content: {
    contentType: string,
    contentData: string
  };
}

export default class UserCard extends React.Component<UserProps, ProfileContent> {
  constructor(props: UserProps) {
    super(props);
    this.state = {
      content: {
        contentType: "",
        contentData: ""
      }
    }
  }

  getContentData = (event: any): void => {
    /* Quit if no data get loaded yet
     * this way we can prevent the display of hover
     * info when their is no user in the card */
    if (!this.props.loaded) {
      return
    }
    let data_type = event.target.dataset.type
    this.setState(
      {
        content: {
          contentType: data_type,
          contentData: this.props[data_type]
        }
      }
    )
  }
  componentDidUpdate(prevProps: UserProps) {
    // called everytime the props are updated
    if (this.props.name !== prevProps.name) {
      this.setState(
        {
          content: {
            contentType: "name",
            contentData: this.props.name,
          }
        }
      )
    }
  }

  render() {
    const mock_picture = "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_1280.png"
    const { content } = this.state;

    return (
      <div>
        <div className="card">
          <img src={!this.props.loaded ? mock_picture : this.props.picture} style={imgStyle} className="mt-4 img-thumbnail mx-auto d-block" />
          <hr />
          <div className="row justify-content-center">
            <div className="col-10">
              <CardText content={content} />
            </div>
          </div>
          <hr />
          <div className="row mt-2 mb-4">
            <div className="col text-center">
              <i data-type="name" className="far icon-fa fa-user fa-2x" onMouseEnter={this.getContentData}></i>
            </div>
            <div className="col text-center">
              <i data-type="phone" className="fas icon-fa fa-phone fa-2x" onMouseEnter={this.getContentData}></i>
            </div>
            <div className="col text-center">
              <i data-type="email" className="fas icon-fa fa-at fa-2x" onMouseEnter={this.getContentData}></i>
            </div>
            <div className="col text-center">
              <i data-type="country" className="fas icon-fa fa-map-marked-alt fa-2x" onMouseEnter={this.getContentData}></i>
            </div>
          </div>
        </div >
      </div >
    );
  }
}
