import React, { useState ,useEffect } from 'react'
import MapStepTwo  from './MapStepTwo'
import RegisterStepOne from './RegisterStepOne'
import axios from 'axios'


const Wizard = ({changePage}) => {
    const [ step, setstep]= useState(1)
    const [ data , setdata]= useState([])
  
    const ChangePage=(e)=>{
        setstep(e)
    }
    const UpdataList=(e)=>{
      setdata(e)
    }
    const GettingCoordinate= async (e)=>{
        console.log(data)
        
       
            
       await axios.post('http://stage.achareh.ir/api/karfarmas/address', { firstName:data.FirstName,
       lastName:data.lastName,
       coordinate_mobile:data.coordinateMobile,
       coordinate_phone_number:data.HomeNumber,
       Address:data.Address,
       gender:'male',
       lat:e.lat,
       lng:e.lng,
        },{
           auth:{
               username:'09822222222',
               password:'sana1234'
           }
       })
      
    }

    return (
        <div>
            {step===1 && <RegisterStepOne UpdataList={UpdataList} ChangePage={ChangePage}/>}
            {step===2 && <MapStepTwo GettingCoordinate={GettingCoordinate} changePage={changePage} />}
        </div>
    )
}

export default Wizard
