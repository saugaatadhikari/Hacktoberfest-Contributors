import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Cards.css";
// const fetch = require("node-fetch");

const Cards = () => {
  const [datas, setDatas] = useState([]);
  const dataURL =
    "https://raw.githubusercontent.com/Saugat-Adhikari/Hacktoberfest-Nepal-2020/main/Add_Your_Info_Here.json";
  const imgURL = `https://avatars.githubusercontent.com/`;

  async function fetchData() {
    let response = await axios(dataURL);
    let result = await response.data;
    setDatas(result);
    console.log(result);
  }

  useEffect(() => {
    fetchData();
  });
  console.log(datas);

  return (
    <div className="cards">
      {datas.map((data) => (
        <div className="card-container">
          <span class="pro">Dev</span>
          <img
            class="round"
            src={`${imgURL}${data.githubUsername}`}
            alt={data.name}
          />
          <h3>{data.name}</h3>
          <h6>{data.address}</h6>
          <div className="buttons">
            <form action={`https://www.facebook.com/${data.facebookUsername}`}>
              <input className="primary" type="submit" value="Facebook" />
            </form>
            <form action={`https://www.github.com/${data.githubUsername}`}>
              <input className="primary" type="submit" value="GitHub" />
            </form>
          </div>
          <div class="skills">
            <h6>Skills</h6>
            <ul>
              {data.skills.map((skill) => (
                <li>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
