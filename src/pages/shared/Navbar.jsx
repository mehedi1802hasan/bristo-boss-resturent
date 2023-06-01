import React from 'react';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { FaShoppingCart } from 'react-icons/fa';
import useCard from '../../hook/useCard';
const Navbar = () => {
  const {logOut,user}=useContext(AuthContext)
  const [card]=useCard()
  const handleLogout=()=>{
    logOut()
    .then(()=>{})
    .catch(error=>{
      console.log(error.message)
    })
  }
    const navOptions=<>
 
            <li ><Link to='/'>Home</Link></li>
        <li><Link to='/menu'>Menu</Link></li>
       <li><Link to='/order/salad'>Order</Link></li>
{/**       <li><Link to='/dashboard/mycard'>DashBoard</Link></li> 
 **/
}      
       <li>
       <Link to='/dashboard/mycard'>
       <button className="gap-2 btn">
 <FaShoppingCart/>
  <div className="badge badge-secondary">+{ card?.length ||  0}</div>
</button>
       </Link>
       </li>
       
      {
        user ?
        <button onClick={handleLogout}><Link to='/'>logOut</Link></button>
        :
        <>
          <li ><Link to='/login'>Login</Link></li>
          <li ><Link to='/registration'>Registration</Link></li>

        </>
      }
      
    </>
    
    return (
        <div>
            <div className="fixed z-10 max-w-screen-xl mx-auto text-white bg-black navbar bg-opacity-30">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="p-2 mt-3 text-black shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
       {navOptions}
      </ul>
    </div>
    <a className="text-xl normal-case btn btn-ghost">Bistro Boss</a>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 menu menu-horizontal">
     {navOptions }
    </ul>
  </div>
  <div className="navbar-end">
 
  </div>
</div>
        </div>
    );
};

export default Navbar;