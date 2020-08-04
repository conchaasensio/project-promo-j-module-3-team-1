import React, { useState, useEffect } from 'react';
import Header from './header-footer/Header';
import Form from './form/Form';
import Footer from './header-footer/Footer';
import Preview from './preview/Preview';
import '../stylesheets/common/_app.scss';

function Card() {
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const [job, setJob] = useState(localStorage.getItem('job') || '');
  const [email, setEmail] = useState(localStorage.getItem('email') || '');
  const [phone, setPhone] = useState(localStorage.getItem('phone') || '');
  const [linkedin, setLinkedin] = useState(
    localStorage.getItem('linkedin') || ''
  );
  const [github, setGithub] = useState(localStorage.getItem('github') || '');
  const [photo, setPhoto] = useState(localStorage.getItem('photo') || '');
  const [palette, setPalette] = useState(
    localStorage.getItem('palette') || '1'
  );

  const handleInput = (data) => {
    if (data.inputKey === 'name') {
      setName(data.inputValue);
    } else if (data.inputKey === 'job') {
      setJob(data.inputValue);
    } else if (data.inputKey === 'email') {
      setEmail(data.inputValue);
    } else if (data.inputKey === 'phone') {
      setPhone(data.inputValue);
    } else if (data.inputKey === 'linkedin') {
      setLinkedin(data.inputValue);
    } else if (data.inputKey === 'github') {
      setGithub(data.inputValue);
    } else if (data.inputKey === 'palette') {
      setPalette(data.inputValue);
    } else if (data.inputKey === 'photo') {
      setPhoto(data.inputValue);
    }
  };
  useEffect(() => {
    localStorage.setItem('name', name);
    localStorage.setItem('job', job);
    localStorage.setItem('email', email);
    localStorage.setItem('phone', phone);
    localStorage.setItem('linkedin', linkedin);
    localStorage.setItem('github', github);
    localStorage.setItem('photo', photo);
    localStorage.setItem('palette', palette);
  });

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

export default Card;
