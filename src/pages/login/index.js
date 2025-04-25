import { useEffect, useContext } from 'react';
import Logo from '../../assets/images/logo.png';
import { MyContext } from '../../App';

const Login = ()=>{

  const context = useContext(MyContext)

  useEffect(()=>{
    context.setisHideSidebarAndHeader(true);
  })

  return(
    <section className="loginSection">
      <div className="loginBox">
        <div className='logo text-center'><img src={Logo}/></div>
      </div>
    </section>
  )
}

export default Login;