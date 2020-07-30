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

  const handleInput = (data, event) => {
    console.log("han cambiado algo", data);
    const value = event.currentTarget.value;
    const inputId = event.currentTarget.id;
    console.log(value, inputId);

    const newName
    newName[inputId] = value;
    setName(newName);
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
