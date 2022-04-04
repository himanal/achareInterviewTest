import * as React from "react";
import { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsFillCheckCircleFill, BsFillCircleFill } from "react-icons/bs";
import Button from "react-bootstrap/Button";

const RegisterStepOne = ({ UpdataList,ChangePage }) => {
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [coordinateMobile, setcoordinateMobile] = useState("");
  const [HomeNumber, setHomeNumber] = useState("");
  const [Address, setAddress] = useState("");
  const [Gender, setGender] = useState("");
  const [NameError, setNameError] = useState(false);
  const [LastNameError, setLastNameError] = useState(false);
  const [CoordinateError, setCoordinateError] = useState(false);
  const [HomeError, setHomeError] = useState(false);
  const [AddressError, setAddressError] = useState(false);

  const gettingName = (e) => {
    setFirstName(e.target.value);
    setNameError(false);
  };
  const gettingLastName = (e) => {
    setLastName(e.target.value);
    setLastNameError(false);
  };
  const gettingCoordinate = (e) => {
    setcoordinateMobile(e.target.value);
    setCoordinateError(false);
  };
  const gettingHomeNumber = (e) => {
    setHomeNumber(e.target.value);
    setHomeError(false);
  };
  const gettingAddress = (e) => {
    setAddress(e.target.value);
    setAddressError(false);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (!FirstName) {
      setNameError(true);
    }
    if (!LastName) {
      setLastNameError(true);
    }
    if (!coordinateMobile || coordinateMobile.length < 11) {
      setCoordinateError(true);
    }
    if (!HomeNumber || HomeNumber.length < 11) {
      setHomeError(true);
    }
    if (!Address) {
      setAddressError(true);
    }

    if (
      !FirstName ||
      !LastName ||
      !coordinateMobile ||
      !HomeNumber ||
      !Address
    ) {
      return;
    }
    //   console.log(FirstName, LastName, coordinateMobile, HomeNumber, Address, Gender)
    UpdataList({ FirstName ,LastName, coordinateMobile, HomeNumber, Gender});
    ChangePage(2)
  };

  return (
    <div className="App" dir={"rtl"}>
      <div className="appBox ">
        <div className="header">
          <h5>ثبت نام</h5>
          <BiArrowBack className="headerBack" />
        </div>
        <p className="headerText">لطفا اطلاعات خود را وارد نماید</p>
        <form onSubmit={onSubmit} className="contain">
          <div className={NameError === false ? "eachBox" : "eachbox Error"}>
            <div className="eachText">نام</div>
            <input type="text" className="eachinput" onChange={gettingName} />
            <div className="chackValue">
              {!FirstName ? (
                <BsFillCircleFill className="chackFaild" />
              ) : (
                <BsFillCheckCircleFill className="checkmark" />
              )}
            </div>
          </div>
          <div
            className={LastNameError === false ? "eachBox" : "eachbox Error"}
          >
            <label className="eachText">نام خانوادگی</label>
            <input
              type="text"
              className="eachinput"
              onChange={gettingLastName}
            />
            <div className="chackValue">
              {!LastName ? (
                <BsFillCircleFill className="chackFaild" />
              ) : (
                <BsFillCheckCircleFill className="checkmark" />
              )}
            </div>
          </div>
          <div
            className={CoordinateError === false ? "eachBox" : "eachbox Error"}
          >
            <label htmlFor="phone" className="eachText">تلفن همراه</label>
            <input
              type="number"
              name="phone"
              className="eachinput"
              minLength="11"
              maxLength="14"
              onChange={gettingCoordinate}
            />
            <div className="chackValue">
              {coordinateMobile.length <= 10 ? (
                <BsFillCircleFill className="chackFaild" />
              ) : (
                <BsFillCheckCircleFill className="checkmark" />
              )}
            </div>
          </div>
          <div className={HomeError === false ? "eachBox" : "eachbox Error"}>
            <label htmlFor="localPhone" className="eachText"> تلفن ثابت </label>
            <input
              type="number"
              name="localPhone"
              className="eachinput"
              minLength="11"
              maxLength="14"
              onChange={gettingHomeNumber}
            />
            <div className="chackValue">
              {HomeNumber.length <= 10 ? (
                <BsFillCircleFill className="chackFaild" />
              ) : (
                <BsFillCheckCircleFill className="checkmark" />
              )}
            </div>
          </div>
          <div className="space"></div>
          <label htmlFor="address" className="eachText ">آدرس دقیق </label>
          <div className={AddressError === false ? "eachBox" : "eachbox Error"}>
            <input name="address" className="eachinput" onChange={gettingAddress} />
            <div className="chackValue">
              {!Address ? (
                <BsFillCircleFill className="chackFaild" />
              ) : (
                <BsFillCheckCircleFill className="checkmark" />
              )}
            </div>
          </div>
          <div className="genderBox ">
            <label htmlFor='gender'> جنسیت</label>
            <div className="RadioToolBar">
              <label htmlFor='male'>اقا</label>
              <input
                
                type="radio"
                name="gender"
                value="male"
                onChange={(e) => {
                  setGender(e.target.value);
                  console.log('ok')
                }}
              />

              <label htmlFor='female'>خانم</label>
              <input
                type="radio"
                name="gender"
                value="female"
              
                onChange={(e) => {
                  setGender(e.target.value);
                  console.log('ok')
                }}
              />
            </div>
          </div>
          <div className="btnBox">
            <div className="d-grid gap-2">
              <Button
                type="onSubmit"
                className="btnColor"
                variant="secondary"
                size="lg"
              >
                مرحله بعد
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStepOne;
