import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/actions";
import { REGISTER_USER_RESET } from "../../constants/constant";
import "./registration.css";


  const Registration = () => {

  const dispatch = useDispatch()
  const alert = useAlert()


  const {error,loading,success}= useSelector((state)=>state.newUser)
  

  const [user,setUser]= useState({
    name:"",
    address:"",
    ward:"",
    age:"",
    number:"",
    gender:"",
    education:""
  })

  const {name,address,ward,age,number,gender,education} = user;

  
  const registerSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.set("name", name);
    myForm.set("age", age);
    myForm.set("gender", gender);
    myForm.set("ward", ward);
    myForm.set("number", number);
    myForm.set("education", education);
    myForm.set("address", address);
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
    
      setUser({ ...user, [e.target.name]: e.target.value });
      // setUser({ [e.target.name]: e.target.value });

      // console.log(user)
 
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }else{
      if(!loading){
        if(success){
          alert.success("Registered Successfully")
          dispatch({type:REGISTER_USER_RESET})
        }
      }
      setUser({
        ...user,
        name:"",
        address:"",
        ward:"",
        age:"",
        number:"",
        education:""

      })
    }

  }, [dispatch, error, alert,success,loading]);

  return (
    <div className="body-container">
      <div class="container">
        <div class="title">नशा मुक्ति वाहिनी रजिस्ट्रेशन</div>
        <div class="content">
          <form onSubmit={registerSubmit}>
            <div class="user-details">
              <div class="input-box">
                <span class="details">वालंटियर का नाम:</span>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={name}
                    onChange={registerDataChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">पता:</span>
                <input
                  type="text"
                  name="address"
                  placeholder="Enter your पता:"
                  value={address}
                    onChange={registerDataChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">वार्ड/ग्राम:</span>
                <input
                  type="text"
                  name="ward"
                  placeholder="Enter your वार्ड/ग्राम:"
                  value={ward}
                    onChange={registerDataChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">मोबाईल नम्बर:</span>
                <input
                  type="text"
                  name="number"
                  placeholder="Enter your number"
                  value={number}
                    onChange={registerDataChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">आयु:</span>
                <input
                  type="text"
                  name="age"
                  placeholder="Enter your age"
                  value={age}
                    onChange={registerDataChange}
                  required
                />
              </div>
              <div class="input-box">
                <span class="details">शैक्षणिक योग्यता:</span>
                <input
                  type="text"
                  name="education"
                  placeholder="Enter your Education"
                  value={education}
                    onChange={registerDataChange}
                  required
                />
              </div>
            </div>
            <div class="gender-details" name="gender">
              <input type="radio" name="gender"  onChange={registerDataChange} value="male" id="dot-1" />
              <input type="radio" name="gender"  onChange={registerDataChange} value="female" id="dot-2" />
              <input
                type="radio"
                name="gender"
                value="Prefer not to say"
                id="dot-3"
                onChange={registerDataChange}
              />
              <span class="gender-title">Gender</span>
              <div class="category">
                <label for="dot-1">
                  <span class="dot one"></span>
                  <span class="gender">Male</span>
                </label>
                <label for="dot-2">
                  <span class="dot two"></span>
                  <span class="gender">Female</span>
                </label>
                <label for="dot-3">
                  <span class="dot three"></span>
                  <span class="gender">Prefer not to say</span>
                </label>
              </div>
            </div>
            <div>
              <input
                type="checkbox"
                id="privacy"
                name="privacy-policy"
                value="privacy"
                className="privacy-policy"
              />
              <span className="privacy-text">
                मैं शपथ लेता/लेती हूं कि मैं नशा मुक्ति वाहिनी की सदस्य के रूप
                में नशे की बीमारी को दूर करने के लिए सहयोगी के रुप में सदैव
                कार्य कार्य करूंगी/करूँगा
              </span>
            </div>
            <div class="button">
              <input type="submit"  />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
