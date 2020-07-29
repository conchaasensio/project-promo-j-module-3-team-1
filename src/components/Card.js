import React, { useState } from 'react';
import Header from './header-footer/Header';
import Form from './form/Form';
import Footer from './header-footer/Footer';
import Preview from './preview/Preview';
import '../stylesheets/common/_app.scss';

function App() {
  const [name, setName] = useState('MC');

  const handleInput = (data) => {
    console.log('han cambiado algo', data);
  };

  return (
    <div className="App">
      <Header />
      <main className="app__main">
        <div className="wrapper">
          <Preview name={name} />
          <Form handleInput={handleInput} name={name} />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
