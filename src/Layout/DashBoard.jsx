import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaWallet,FaShoppingCart ,FaHome,FaCalendarAlt,FaFileContract,FaUtensils,FaBook,FaUsers} from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import useCard from '../hook/useCard';
const DashBoard = () => {
  // todo isAdmin
  const isAdmin=true
  const [card]=useCard()
    return (
        <div>
      <div className="drawer drawer-mobile ">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="flex flex-col items-center justify-center drawer-content">
   <div className='h-full'><Outlet/></div>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side ">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="p-4 menu w-80 bg-amber-600 text-base-content">
    {
      isAdmin ?
     <>
      <li><NavLink to='/'><FaHome/>Admin Home</NavLink></li>   
     <li><NavLink to='/dashboard/reservation'><FaUtensils/>Add Itme</NavLink></li>
    <li><NavLink to='/dashboard/history'><FaWallet/>Manage Item</NavLink></li>
    <li><NavLink to='/dashboard/mycard'><FaBook/>Manage Bookings </NavLink></li>
    <li><NavLink to='/dashboard/allusers'><FaUsers/>All-User </NavLink></li>
     </>
      :
    <>
      <li><NavLink to='/'><FaHome/>User Home</NavLink></li>   
     <li><NavLink to='/dashboard/reservation'><FaCalendarAlt/>Reservation</NavLink></li>
    <li><NavLink to='/dashboard/history'><FaWallet/>Payment History</NavLink></li>
    <li><NavLink to='/dashboard/mycard'><FaShoppingCart/>My card  <span className='text-green-800 '>+{card.length || 0 }</span></NavLink></li>
    </>
    }
    
    <div className="divider"></div>
    
    <li><NavLink to='/'><FaHome/>Home</NavLink></li>  
    <li><NavLink to='/dashboard/menu'>Menu</NavLink></li>
       <li><NavLink to='/order/salad'>Order</NavLink></li>
    <li><NavLink to='/contact'><FaFileContract/>Contact</NavLink></li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default DashBoard;