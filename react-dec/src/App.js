import React from "react";
import Video from "./components/Video";
import Audio from "./components/Audio";
import Rendering from "./components/Rendering";

import Button from "./components/Button";
import Counter from "./components/Counter";

function App() {
  return (
    <>
    {/* <div>
      hello
      <Video />
      <Audio username="harshit" id={21} />
      <Audio username="john" />
      <Rendering />

      <Button name="play"  msg="play ho gya" onbtnclick= {()=>alert("i am play")}>Play</Button>
      <Button name="pause"  msg="pause ho gya" onbtnclick= {()=>alert("i am pause")}>Pause</Button>
    </div> */}
    <Counter/>
    </>
  );
}

export default App;
