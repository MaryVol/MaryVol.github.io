import "./App.css";
import React, { useEffect, useState } from "react";

export const Modal = ({ showModal, setShowModal, openModal }) => {
  const [spacesData, setSpaceData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getUrl = "https://api.spacexdata.com/v4/capsules";
  const getData = async () => {
    const response = await fetch(getUrl);
    const data = await response.json();
    setSpaceData(data);
  };
  if (!showModal) return null;
  return (
    <div className="modal">
      <button onClick={openModal}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z"
            fill="#C3B8E8"
          />
        </svg>
      </button>
      <h3>Starlink</h3>
      <div className="list">
        <ul className="type">
          <p>Type</p>
          {spacesData.map((spacesData) => (
            <li>{spacesData.type}</li>
          ))}
        </ul>
        <ul className="status">
          <p>Status</p>
          {spacesData.map((spacesData) => (
            <li>{spacesData.status}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
