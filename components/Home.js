import React from "react";
import imageOne from './images/profilephoto.jpg'
import "./Home.css";

export default function Home() {
  return (
    <div className="homecontainer">
      <div>
        <h1>My Self Vivek Kumar Pandey</h1>
        <p>I am a Frontent Developer</p>
        <ul>
            <label htmlFor="tag">Skills:</label>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>React</li>
        </ul>
      </div>
      <img src={imageOne} alt="Profile Photo" />
    </div>
  );
}
