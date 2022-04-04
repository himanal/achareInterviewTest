import Wizard from "./component/Wizard";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowList from "./component/ShowList";
import { useState } from "react";

function App() {

  const [show,setshow]=useState(1)

  const changePage =(e)=>{
    setshow(e)
  }

  return (
    <div   >
     {show===2 || <Wizard changePage={changePage}/>}
      {show===2 && <ShowList />}
    </div>
  );
}

export default App;
