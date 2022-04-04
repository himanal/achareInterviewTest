import axios from "axios";
import React, { useEffect, useState } from "react";

const ShowList = () => {
  const [dataRecive, setdataRecive] = useState(false);
  const [data, setdata] = useState([]);
  const [mobile, setmobile] = useState();

  const fecthData = async () => {
    const EachData = await axios.get(
      "http://stage.achareh.ir/api/karfarmas/address",
      {
        auth: {
          username: "09822222222",
          password: "sana1234",
        },
      }
    );
    console.log(EachData.data);
    
    setdata(EachData.data)
    setdataRecive(true)
  };

  return (
    <div dir="rtl">
      <div className="listBox" >
          { dataRecive && data.map(item=>(
              <div className='dvlistBox'>
        <div className="itemListBox" ><spaa>نام:</spaa> {item.lastName}</div>
        <div className="itemListBox"><span>ادرس:</span>{item.address} </div>
        <div className="itemListBox"><span>موبایل</span>{item.coordinate_mobile}</div>
          </div>
          ))}
      </div>
      <button onClick={fecthData}>jsdhfskdh</button>
    </div>
  );
};

export default ShowList;
