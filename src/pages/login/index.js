import { useEffect, useContext, useState } from 'react';
import Logo from '../../assets/images/logo.png';
import { MyContext } from '../../App';
import pattern from '../../assets/images/pattern.webp';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Google_Icons from '../../assets/images/Google_Icons.png'

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
              <div className={`form-group position-relative ${inputIndex===0 && 'focus'}`}>
                <span className='icon'><MdEmail/></span>
                <input type='email'
                  className='form-control' 
                  placeholder='enter your email' 
                  onFocus={()=>focusInput(0)}
                  onBlur={()=>setInputIndex(null)}/>
              </div>

              <div className={`form-group position-relative ${inputIndex===1 && 'focus'}`}>
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

              <div className='form-group text-center'>
                <Link to={'/forgot-password'} className='link'>FORGOT PASSWORD</Link>

              <div class="d-flex align-items-center justify-content-center or mt-3 mb-3">
                <span class="line"></span>
                <span class="txt">or</span>
                <span class="line"></span>
              </div>

              <Button variant='outlined' className="w-100 btn-lg btn-big loginWithGoogle">
                <img src={Google_Icons} width="25px"/> &nbsp; Sign In with Google
              </Button>

              </div>

              
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Login;