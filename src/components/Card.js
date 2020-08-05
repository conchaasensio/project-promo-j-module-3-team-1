import React, { useState } from "react";
import Header from "./header-footer/Header";
import Form from "./form/Form";
import Footer from "./header-footer/Footer";
import Preview from "./preview/Preview";
import "../stylesheets/common/_app.scss";

function Card() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");
  const [photo, setPhoto] = useState("");
  const [palette, setPalette] = useState("1");

  const handleInput = (data) => {
    if (data.inputKey === "name") {
      setName(data.inputValue);
    } else if (data.inputKey === "job") {
      setJob(data.inputValue);
    } else if (data.inputKey === "email") {
      setEmail(data.inputValue);
    } else if (data.inputKey === "phone") {
      setPhone(data.inputValue);
    } else if (data.inputKey === "linkedin") {
      setLinkedin(data.inputValue);
    } else if (data.inputKey === "github") {
      setGithub(data.inputValue);
    } else if (data.inputKey === "palette") {
      setPalette(data.inputValue);
    } else if (data.inputKey === "photo") {
      setPhoto(data.inputValue);
    }
  };

  const resetCard = () => {
    setName(Card.defaultProps.defaultName);
    setJob(Card.defaultProps.defaultJob);
    setEmail("");
    setPhone("");
    setLinkedin("");
    setGithub("");
    setPalette(Card.defaultProps.defaultPalette);
    setPhoto("");
  };

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <div className="wrapper">
          <Preview
            name={name}
            job={job}
            email={email}
            phone={phone}
            linkedin={linkedin}
            github={github}
            palette={palette}
            photo={photo}
            resetCard={resetCard}
          />

          <Form
            handleInput={handleInput}
            name={name}
            job={job}
            email={email}
            phone={phone}
            linkedin={linkedin}
            github={github}
            palette={palette}
            photo={photo}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

Card.defaultProps = {
  defaultName: "Jeanne Baret",
  defaultJob: "Botánica",
  defaultPalette: "1",
};
export default Card;
