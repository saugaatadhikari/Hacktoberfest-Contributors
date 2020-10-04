import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Cards.css";
// const fetch = require("node-fetch");

const Cards = () => {
  //   let tryy = [
  //     {
  //       name: "Saugat Adhikari",
  //       address: "Pokhara",
  //       skills: ["Web Developer", "Graphics Designer", "MERN Stack Dev"],
  //       githubUsername: "saugat-adhikari",
  //       instagramUsername: "saugaat_adhikari",
  //       facebookUsername: "saugat0",
  //     },
  //     {
  //       name: "Arjun Adhikari",
  //       address: "Butwal",
  //       skills: ["Java", "NodeJS", "Kotlin"],
  //       githubUsername: "arjunadhikary",
  //       instagramUsername: "arjun_adhikary",
  //       facebookUsername: "reasonworld123",
  //     },
  //     {
  //       name: "Bikram Parajuli",
  //       address: "Pokhara",
  //       skills: ["Flutter", "NodeJS", "Python"],
  //       githubUsername: "ParajuliBkrm",
  //       instagramUsername: "Parajuli.Bkrm",
  //       facebookUsername: "ParajuliBkrm",
  //     },
  //     {
  //       name: "Shankar Kharel",
  //       address: "Butwal",
  //       skills: ["Flutter", "Java", "Python"],
  //       githubUsername: "shankarkharel",
  //       instagramUsername: "shankarkharel35",
  //       facebookUsername: "Shankar Kharel",
  //     },
  //     {
  //       name: "Shishir Devkota",
  //       address: "Pokhara",
  //       skills: ["C language basic"],
  //       githubUsername: "SHI-SHIR",
  //       instagramUsername: "codekavya",
  //       facebookUsername: "codekavya",
  //     },
  //     {
  //       name: "Agni Pradhan",
  //       address: "Pokhara",
  //       skills: ["Flutter", "Java", "Python", "Linux"],
  //       githubUsername: "agnipradhan",
  //       instagramUsername: "codekavya",
  //       facebookUsername: "agni.pradhan.3",
  //     },
  //     {
  //       name: "Bigyan Timilsina",
  //       address: "Pokhara",
  //       skills: ["Flutter", "Graphics design", "Python"],
  //       githubUsername: "bigyanic",
  //       instagramUsername: "the.bigyan.timilsina",
  //       facebookUsername: "bigyanic",
  //     },
  //     {
  //       name: "Nischal Poudel",
  //       address: "Pokhara",
  //       skills: ["Acquiring Skills"],
  //       githubUsername: "whatever-thisis",
  //       instagramUsername: "pol_nischal_pol",
  //       facebookUsername: "codekavya",
  //     },
  //     {
  //       name: "Ekraj Ghimire",
  //       address: "Butwal",
  //       skills: ["Flutter", "Web Development", "Python"],
  //       githubUsername: "ManishGhimire127",
  //       instagramUsername: "manishg_official",
  //       facebookUsername: "manishg.official127",
  //     },
  //   ];

  const [datas, setDatas] = useState([]);
  

  const dataURL =
    "https://raw.githubusercontent.com/Saugat-Adhikari/Hacktoberfest-Nepal-2020/main/Add_Your_Info_Here.json";
  const imgURL = `https://avatars.githubusercontent.com/`;

    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(dataURL).then((response) => {
          // console.log(response.data);
          setDatas(JSON.stringify(response.data))
          console.log(datas)
        });
      };
      fetchData();
    }, []);
  
  
 
  

  //   let settings = { method: "Get" };

  //     await fetch(dataURL, settings)
  //       .then((res) => res.json())
  //       .then((json) => {
  //         tryy = json;
  //         console.log(tryy)
  //       });

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
