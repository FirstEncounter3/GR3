import React from "react";

import "./App.css";

import Input from "../Input/Input.jsx";
import TextArea from "../TextArea/TextArea.jsx";
import InfoBoard from "../InfoBoard/InfoBoard.jsx";
import VersionLabel from "../VersionLabel/VersionLabel.jsx";

const App = () => {
  return (
    <>
      <Input />
      <TextArea />
      <VersionLabel />
      <InfoBoard />
    </>
  );
};

export default App;
