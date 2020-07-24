import React from "react";
import Header from "./header-footer/Header";
import Form from "../components/form/Form";
import Footer from "./header-footer/Footer";
import Preview from "./preview/Preview";
import "../stylesheets/common/_app.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <main class="app__main">
        <div class="wrapper">
          <Preview />
          <Form />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
