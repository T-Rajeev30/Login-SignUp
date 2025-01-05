import React from 'react'
import user from "../images/user.png"
import email from "../images/mail.png"
import fullname from "../images/id-card.png"
import avatar from "../images/avatar.png"
import cover from "../images/cover image.png"
import password from "../images/password.png"
const SignPage = () => {
  return (
    
    <div className='flex '>
        <div className="leftside bg-slate-700 h-[100vh] w-[50%]  ">
        </div>
        <div className="rightside bg-white h-[100vh] w-[50%] flex justify-center items-center align-middle  ">
          <div className="signwindow h-[70%] w-[60%] bg-slate-700 rounded-xl bg-opacity-80">
            <div className="heading justify-center items-center flex font-bold text-3xl text-white m-1 p-1">
              <h1>Sign Up</h1>
            </div>
            <div className="username h-7  justify-center m-2  w-[100%] gap-6  flex ">
              <img src={user} alt="" />
              <input type="text" />
            </div>
            <div className="email h-7 justify-center  m-2 w-[100%] gap-6  flex ">
              <img src={email} alt="" />
              <input type="text" />
            </div>
            <div className="fullname h-7 justify-center  m-2 w-[100%] gap-6  flex ">
              <img src={fullname} alt="" />
              <input type="text" />
            </div>
            <div className="avatar h-[30%] justify-center  m-2 w-[100%] gap-6  flex ">
              <img src={avatar} alt="" />
            </div>
            <div className="cover bg-slate-200 h-[20%] justify-center ml-12  w-[80%]  flex ">
              <img src={cover}  alt=""  className='h-8 m-3'/>
            </div>
            
            <div className="password h-7 justify-center gap-6  w-[100%] mt-6  flex ">
              <img src={password} alt="" />
              <input type="text" />
            </div>
          </div>
        </div>

    </div>

    
  )
}

export default SignPage