import React from "react";
import "./App.css";
import {
  EmailShareButton,
  FacebookShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  PinterestShareButton,
  PocketShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  ViberShareButton,
  VKShareButton,
  WhatsappShareButton,
  WorkplaceShareButton,
} from "react-share";
import ReactWhatsapp from "react-whatsapp";
export default function App() {
  const Data = [
    // {
    //   name: "<img src="https://plus.unsplash.com/premium_photo-1664372599369-dd9f4ee07254?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1166&q=80"/>",
    // },
  ];
  return (
    <div>
      <ReactWhatsapp
        number="+918017242275"
        message={`https://s3.amazonaws.com/criterion-production/explore_images/1163-be829752be16371f35aad962dd0ee8dd/EqV7Y9BOuhZMNvHkcEmghaSAykI5cd_original.jpg`}
      >
        <button type="">ss</button>
      </ReactWhatsapp>
    </div>
  );
}
