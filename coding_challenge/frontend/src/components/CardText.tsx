import * as React from "react";
import { ProfileContent } from "./UserCard"


const name_msg = "My name is";
const email_msg = "My Email is";
const phone_msg = "My phone is";
const map_msg = "I live in"

export default class CardText extends React.Component<ProfileContent>{
  constructor(props: ProfileContent) {
    super(props);
  }
  getContentMsg = (): string => {

    let message: string;
    let content_type: string = this.props.content.contentType;
    if (content_type === "name") {
      message = name_msg
    } else if (content_type === "phone") {
      message = phone_msg
    } else if (content_type === "email") {
      message = email_msg
    } else if (content_type === "country") {
      message = map_msg
    } else {
      message = "Please Choose one option!"
    }
    return message
  }

  render() {
    return (
      <div className="text-center">
        <p>
          <strong>{this.getContentMsg()}</strong>
        </p >
        <p>
          {this.props.content.contentData}
        </p>
      </div>
    )
  };
}
