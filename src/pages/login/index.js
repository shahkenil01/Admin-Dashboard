import { useEffect, useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import { MyContext } from '../../App';
import pattern from '../../assets/images/pattern.webp';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const Login = ()=>{

  const context = useContext(MyContext)

  return(
    <>
      <img src={pattern} className='loginPatern'/>
      <section className="loginSection">
        <div className="loginBox">
          <div className='logo text-center'>
            <img src={Logo} width="60px"/>
            <h5 className='font-weight-bold'>Login to Hotash</h5>
          </div>

          <div className='wrapper mt-3 card border p-4'>
            <form>
              <div className='form-group mb-3 position-relative'>
                <span className='icon'><MdEmail/></span>
                <input type='text' className='form-control' placeholder='enter your email'></input>
              </div>
            </form>
          </div>

        </div>
      </section>
    </>
  )
}

export default Login;