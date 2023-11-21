import React, { useState } from "react";
import Button from "@mui/material/Button";
import './App.css';
function App() {
  const [hideText, setHideText] = useState(true);
  const [text, settext] = useState("hide");
  <br></br>

  function changeR() {
    setHideText(!hideText);
    if (hideText) {
      settext("show");
    } else {
      settext("hide");
    }
  }

  const Text = () => <div>I will disappear, true Magic</div>;
  return (
    <div>
      <Button variant="contained" onClick={changeR} size="small">
        {text}
      </Button>
      {hideText ? <Text /> : null}
    </div>
  );
}

export default App;