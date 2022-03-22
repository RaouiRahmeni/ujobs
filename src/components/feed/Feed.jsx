import React from "react";
import "./feed.css";
export default function Feed() {
  return (
    <div className="cotainer">
      <div className="jobCard">
        <img
          className="img"
          src="https://images.pexels.com/photos/269077/pexels-photo-269077.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="company logo"
        />
        <span className="title">Job title</span>
        <p className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Reprehenderit doloremque maxime iure neque explicabo commodi! Harum
          odio nobis beatae amet dolor porro et temporibus, culpa architecto
          quisquam eum vitae quae.
        </p>
        <button className="btn">details</button>
      </div>
    </div>
  );
}
