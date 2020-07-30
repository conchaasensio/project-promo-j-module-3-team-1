import React, { useState } from "react";
import Header from "./header-footer/Header";
import Form from "./form/Form";
import Footer from "./header-footer/Footer";
import Preview from "./preview/Preview";
import "../stylesheets/common/_app.scss";

function App() {
  const [name, setName] = useState("");
  const [job, setJob] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const handleInput = (data) => {
    if (data.inputKey == "name") {
      setName(data.inputValue);
    } else if (data.inputKey == "job") {
      setJob(data.inputValue);
    } else if (data.inputKey == "email") {
      setEmail(data.inputValue);
    } else if (data.inputKey == "phone") {
      setPhone(data.inputValue);
    } else if (data.inputKey == "linkedin") {
      setLinkedin(data.inputValue);
    } else {
      setGithub(data.inputValue);
    }
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
          />

          <Form
            handleInput={handleInput}
            name={name}
            job={job}
            email={email}
            phone={phone}
            linkedin={linkedin}
            github={github}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
