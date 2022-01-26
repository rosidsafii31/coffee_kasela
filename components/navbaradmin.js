import {DataContext} from '../store/GlobalState'
import {useRouter} from 'next/router'
import Link from "next/link";
import React, { useContext } from 'react'
import Cookie from 'js-cookie'
import { useState } from "react";


export default function Navbaradmin () {
  const router = useRouter()
  const { state, dispatch } = useContext(DataContext);
  const { auth, cart } = state;

  const isActive = (r) => {
    if (r === router.pathname) {
      return " active";
    } else {
      return "";
    }
  };
  const [offcavnas, setOffcanvas] = useState(false);

  const loggedRouter = () => {
    return (
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdownMenuLink"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <img
            src={auth.user.avatar}
            alt={auth.user.avatar}
            style={{
              borderRadius: "50%",
              width: "30px",
              height: "30px",
              transform: "translateY(-3px)",
              marginRight: "3px",
            }}
          />{" "}
          {auth.user.name}
        </a>

        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <Link href="/profile">
            <a className="dropdown-item">Profile</a>
          </Link>
          {auth.user.role === "admin" && adminRouter()}
          <div className="dropdown-divider"></div>
          <button className="dropdown-item" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </li>
    );
  };
  const adminRouter = () => {
    return (
      <>
        <Link href="/admin/createprofil">
          <a className="dropdown-item">ProfilKaselaweb</a>
        </Link>
      </>
    );
  };
  const handleLogout = () => {
    Cookie.remove("refreshtoken", { path: "api/auth/accessToken" });
    localStorage.removeItem("firstLogin");
    dispatch({ type: "AUTH", payload: {} });
    dispatch({ type: "NOTIFY", payload: { success: "Logged out!" } });
    return router.push("/");
  };

    return (
        <div className="sidebar bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
    {/* logo */}
    <a href="#" className="hover:bg-blue-600 text-white flex items-center space-x-2 px-4">
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
        />
      </svg>
      <span className="text-xl font-extrabold ">COFFEE KASELA</span>
    </a>
    {/* nav */}
    <nav>
      <Link href="/admin">
      <a
        className="block py-2.5 px-4 rounded transition duration-200 text-xl font-bold font-produk3 hover:bg-blue-600 text-gray-lightest"
      >
        Dasboard
      </a>
      </Link>
      <Link  href="/admin/producthome">
      <a
        className="block py-2.5 px-4 rounded transition duration-200  text-xl font-bold font-produk3 hover:bg-blue-600 text-gray-lightest"
      >
        Tambah Products
      </a>
      </Link>
      <Link  href="/admin/artikelhome">
      <a
        className="block py-2.5 px-4 rounded transition duration-200  text-xl font-bold font-produk3 hover:bg-blue-600 text-gray-lightest"
      >
        Tambah Artikel
      </a>
      </Link>
      <Link  href="/admin/pemesananan">
      <a
        className="block py-2.5 px-4 rounded transition duration-200  text-xl font-bold font-produk3 hover:bg-blue-600 text-gray-lightest"
      >
       Riwayat Pemesanan
      </a>
      </Link>
      <Link  href="/admin/users">
      <a
        className="block py-2.5 px-4 rounded transition duration-200  text-xl font-bold font-produk3 hover:bg-blue-600 text-gray-lightest"
      >
       Users
      </a>
      </Link>
      {/* <ul className='hover:bg-blue-600'>
      <Link href="/cart">
                  <li className={"nav-item " + isActive('/cart')}>
                        <i className="fas fa-shopping-cart  position-relative" style={{color:"#fff"}} aria-hidden="true">
                                    <span className="position-absolute"
                                    style={{
                                        padding: '3px 6px',
                                        background: '#ed143dc2',
                                        borderRadius: '50%',
                                        top: '-10px',
                                        right: '-10px',
                                        color: '#ffffff',
                                        fontSize: '14px'
                                    }}>
                                        {cart.length}
                                    </span>
                                </i>
                                 <a className="md:text-lg ml-2" style={{color:"#fff"}}>Cart</a>
                            </li>
                        </Link>
                        </ul> */}
                        <ul className='hover:bg-blue-600'>
                        <li className='mt-3'>
                        {
                        Object.keys(auth).length === 0 
                        ? <li className="nav-item">
                            <Link href="/login">
                                <a className={"nav-link" + isActive('/login')}>
                                    <i className="fas fa-user" aria-hidden="true"></i> 
                                    <a className="md:text-lg ml-2"  style={{color:"#fff"}}>Sign in</a>
                                </a>
                            </Link>
                        </li>
                        : loggedRouter()
                    }
                    </li>
                    </ul>
    </nav>
  </div>

    )
}

