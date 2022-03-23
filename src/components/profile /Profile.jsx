import React from "react";
import "./profile.css";

export default function Profile() {
  return (
    <div className="profileContainer">
      <div className="profile">
        <img
          className="profileImg"
          src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="profilepic"
        />
        <h1 className="name">Kim jobs</h1>
        <p>Tunis, Tunisia</p>
        <p className="descripion">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur
          earum est ipsam officiis distinctio obcaecati velit, minima dolorem
          quas laboriosam voluptates enim quod sequi dolores, nulla nihil,
          aspernatur modi? Deserunt.
        </p>
        <h1>Kimcool@gmail.com</h1>

        <h1></h1>
      </div>
    </div>
  );
}
