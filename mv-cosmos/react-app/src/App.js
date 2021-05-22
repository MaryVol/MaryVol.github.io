import React, { useState } from "react";
import "./App.css";
import logo from "./img/logo.png";
import planet from "./img/Planet.png";
import { Modal } from "./Modal";

function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };
  return (
    <div className="App">
      <nav>
        <img src={logo} alt="logo" />
      </nav>
      <div className="wrapper">
        <div className="gallery">
          <div className="gallery-element">
            <div className="capsules" onClick={openModal}>
              <p>Capsules</p>
            </div>
          </div>
          <Modal
            showModal={showModal}
            setShowModal={setShowModal}
            openModal={() => openModal()}
          />
          <div className="gallery-element">
            <div className="crew">
              <p>Crew</p>
            </div>
          </div>
          <div className="gallery-element">
            <div className="rockets">
              <p>Rockets</p>
            </div>
          </div>
          <div className="gallery-element">
            <div className="details">
              <p>Details</p>
            </div>
          </div>
        </div>
        <div className="rocket">
          <img src={planet} alt="planet" />
        </div>
      </div>
    </div>
  );
}

export default App;
