import React from "react";
import Header from "./Header";
import Form from "./Form";
import Footer from "./Footer";
import Preview from "./Preview";
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
