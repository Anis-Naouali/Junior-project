import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react"
import axios from "axios"
import Shoulder from "./pages/Shoulder";
import Legs from "./pages/Legs";
import Chests from "./pages/Chests";
import Layout from "./pages/Layout"
import Hp from "./pages/Hp"
import Back from "./pages/Back"
import Add from "./pages/Add"
import Update from "./pages/Update"


export default function App() {


  const [data, setData] = useState([]);
  const [trigger, setTrigger] = useState(false);
const [legsData, setlegsData] = useState ([])
const [chestData, setchestData] = useState ([])
const [shoulderData, setshoulderData] = useState ([])
const [backData, setbackData] = useState ([])
const [update,setUpdate]= useState({})

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/work")
      .then((resp) => {
      setData(resp.data);
      setlegsData(resp.data.filter((e)=>
e.categories === "legs"
      ))
      setchestData(resp.data.filter((e)=>
e.categories === "chest"
      ))
      setshoulderData(resp.data.filter((e)=>
e.categories === "shoulders"
      ))
      setbackData(resp.data.filter((e)=>
e.categories === "back"
      ))
      })

      
      .catch((err) => console.log(err));
  }, [trigger]);

const stalUpdate = (obj) =>{
setUpdate(obj)
}
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Hp stal = {stalUpdate}data={data} trig={setTrigger} trigger={trigger}/>} />
          <Route path="shoulder" element={<Shoulder data={shoulderData}/>} />
          <Route path="legs" element={<Legs data={legsData}/>} />
          <Route path="update" element={<Update trig={trigger} setTrig={setTrigger} update={update}/>} />
          <Route path="chests" element={<Chests data={chestData} />} />
          <Route path="back" element={<Back data={backData} />} />
          <Route path="add" element={<Add/>} />
          {/* <Route path="update" element={<Update/>} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);