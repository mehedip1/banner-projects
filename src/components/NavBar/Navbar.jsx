
import { Link } from 'react-router-dom';
import text from '../../assets/logo/text.png'

const Navbar = () => {
const navOption = <>

<div className="flex font-bold ">
   
    <li className='/'><Link to="" >Job Seekers</Link></li>
   <li className=''><Link to="">Employers</Link></li>
   <li><Link to="">Community Builders</Link></li>
  
    </div>

</>

  return (
    <div>
      <div className="navbar text-white bg-cyan-400	">
  <div className="navbar-start">
  <img className='px-5 	' src={text} height={300} width={150} alt="" />
    <ul>
  
    </ul>

   
  </div>
  <div className="navbar-center  lg:flex">
    <ul className="menu menu-horizontal px-1">
    {navOption}
    </ul>
  </div>
 

  <div className="navbar-end">
    <a className="btn btn-secondary text-white	">Schedule call</a>
  </div>
</div>
    </div>
  );
};

export default Navbar;