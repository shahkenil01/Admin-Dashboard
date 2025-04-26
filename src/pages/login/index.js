import { useEffect, useContext, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { MyContext } from '../../App';
import pattern from '../../assets/images/pattern.webp';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from '@mui/material';

const Login = ()=>{

  const [inputIndex, setInputIndex] = useState(null);
  const [isShowPassword, setisShowPassword] = useState(false);
  const context = useContext(MyContext);

  const focusInput=(index)=>{
    setInputIndex(index);
  }

  return(
    <>
      <img src={pattern} className='loginPatern' alt="Pattern"/>
      <section className="loginSection">
        <div className="loginBox">
          <div className='logo text-center'>
            <img src={Logo} width="60px" alt="Logo"/>
            <h5 className='font-weight-bold'>Login to Hotash</h5>
          </div>

          <div className='wrapper mt-3 card border'>
            <form>
              <div className={`form-group mb-3 position-relative ${inputIndex===0 && 'focus'}`}>
                <span className='icon'><MdEmail/></span>
                <input type='email'
                  className='form-control' 
                  placeholder='enter your email' 
                  onFocus={()=>focusInput(0)}
                  onBlur={()=>setInputIndex(null)}/>
              </div>

              <div className={`form-group mb-3 position-relative ${inputIndex===1 && 'focus'}`}>
                <span className='icon'><RiLockPasswordFill/></span>
                <input type={`${isShowPassword===true ? 'text' : 'password'}`}
                  className='form-control' 
                  placeholder='enter your password' 
                  onFocus={()=>focusInput(1)}
                  onBlur={()=>setInputIndex(null)}/>

                  <span className='toggleShowPassword' onClick={()=>setisShowPassword(!isShowPassword)}>
                  {
                    isShowPassword===true ? <IoMdEyeOff/> : <IoMdEye/>
                  }
                  </span>
              </div>

              <div className='form-group'>
                <Button className="btn-blue btn-lg btn-big w-100">Sign In</Button>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Login;