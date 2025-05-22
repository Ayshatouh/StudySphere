import React, { useState } from "react";
import axios from "axios";
import { IoMdMenu } from "react-icons/io";
import { motion } from "framer-motion";
import { HashLink } from "react-router-hash-link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/ReactToastify.css'


const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    path: "/#home",
  },
  {
    id: 2,
    title: "Services",
    path: "/#services",
  },
  {
    id: 3,
    title: "About Us",
    path: "/#aboutus",
  },
  {
    id: 4,
    title: "FAQs",
    path: "/#faqs",
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/#contactus",
  },
];
const Navbar = (args) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [form, setForm] = useState(false);
  const [formType, setFormType] = useState ("login")
  // const [showLogin, setShowLogin] = useState(false);
  // const [showRegister, setShowRegister] = useState(false);
  
  const [formData, setFormData] = useState ({
    firstname:"",
    lastname:"",
    email:"",
    password:"",
    confirmpassword:"",
  });

  const toggle =()=> {
    setForm (!form);
    setFormType("login");
  }


  const handleChange = (e)=>{
    const {name, value} = e.target;
    setFormData ((prev) => ({
      ...prev,
      [name]: value,

    }));
  };
  
  const handleSignup = (e)=>{
    e.preventDefault()

     if (formData.password !== formData.confirmpassword) {
    toast.error("Passwords do not match");
        return;
      }

    // fetch request to send data;
    fetch('http://localhost:34567/api/users/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then (async (resp) =>{
      const text = await resp.text();
       try {
        const data = JSON.parse(text);
        if (resp.ok) {
          toast.success("Registration successful!");
        
        } else {
          toast.error(data.email || "Registration failed");
        }
      } catch (err) {
        console.error("Failed to parse JSON:", text);
        toast.error("Server error");
      }
    }
    
    );
  
  }
 // login
  // //what works with some route so far
  // const login = async (credentials) => {
  //   const response = await fetch('http://localhost:34567/api/users/login', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(credentials),
  //   });

  //   if (!response.ok) {
  //     const errorData = await response.json();
  //     throw new Error(errorData.message || 'Failed to login');
  //   }

  //   return await response.json();
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //  try {
  //     const res = await login({ email, password });
  //     const { token, role } = res;

  //     localStorage.setItem('token', token);
  //     localStorage.setItem('role', role);

  //     if (role === 'admin') navigate('/dashboard');
  //     else if (role === 'tutor') navigate('/tutor/dashboard');
  //     else navigate('/dashboard');
  //   } catch (err) {
  //     console.error('Login error:', err.message);
  //   }
  // };
  // // const login = async (credentials) =>{
  // //   const response = await fetch('http://localhost:34567/api/users/login', {
  // //     method: 'POST',
  // //     headers:{
  // //       'Content-Type': 'application/json',
  // //     },
  // //     body: JSON.stringify(credentials),
  // //   });
  // //   if (!response.ok){
  // //     const errorData = await response.json();
  // //     throw new Error(errorData.message || 'Failed to login');
  // //   }
  // //   return await response.json();
  // //  };
  // //  const handleSubmit = async (e)=>{
  // //   e.preventDefault();
  // //        try {
  // //   const res = await axios.post('/api/users/login', { email, password });
  // //   const { token, role } = res.data;

  // //   localStorage.setItem('token', token);
  // //   localStorage.setItem('role', role);

  // //   // // Redirect based on role
  // //   // if (role === 'admin') navigate('/dashboard');
  // //   // else if (role === 'tutor') navigate('/tutor/dashboard');
  // //   // else navigate('/dashboard'); // default for users

  // // } catch (err) {
  // //   console.log(err);
  // // }
  // //       login(formData)
  // //     .then(() => {
  // //       toast.success('Logged in!');
  // //       toggle();
  // //       navigate('/dashboard');
  // //     })
  // //     .catch(err => {
  // //       toast.error(err.message || 'Login failed');

  // //  });

  // //  }
  
       const handleSubmit = (e) => {
        e.preventDefault();

      navigate('/dashboard');
    
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
React.useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

return (
    <>
<div className="pt-[100px]" >
{form && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="bg-white w-[90%] max-w-md p-8 rounded-lg shadow-lg relative"
    >
      {/* Close Button */}
      <button
        className="absolute top-3 right-3 text-gray-500 hover:text-black text-2xl"
        onClick={toggle}
      >
        &times;
      </button>

      {/* Login or Register content */}
      {formType === "login" ? (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-[#9E3DAF]">Welcome back</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-light-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-light-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full border border-gray-300 rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your password"
                required
              />
              <div
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </div>
              <div className="text-right mt-1">
                <a href="#" className="text-sm text-primary-600 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-[#9E3DAF] text-white py-2 rounded-md hover:bg-light transition"
             
           >
              Sign In
            </button>

            <p className="text-sm text-center mt-3">
              Don't have an account?{" "}
              <button
                type="button"
                className="text-primary-600 hover:underline"
                onClick={() => setFormType("register")}
              >
                Create it here.
              </button>
            </p>
          </form>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold mb-6 text-center text-[#9E3DAF]">Create an Account</h2>
          <form className="space-y-4" onSubmit={handleSignup}>
            <div>
              <label className="block mb-1 text-sm font-medium">First Name</label>
              <input
                type="text"
                name= "firstname"
                onChange={handleChange}
                value={formData.firstname}
                className="w-full border rounded-md px-4 py-2 focus:ring-[#D98CE0]"
                placeholder="Aisha"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Last Name</label>
              <input
                type="text"
                name="lastname"
                onChange={handleChange}
                value={formData.lastname}
                className="w-full border rounded-md px-4 py-2 focus:ring-[#D98CE0]"
                placeholder="Kabir"
              />
            </div>
            <div>
              <label className="block mb-1 text-sm font-medium">Email</label>
              <input
                type="email"
                name= "email"
                onChange={handleChange}
                value={formData.email}
                className="w-full border rounded-md px-4 py-2 focus:ring-[#D98CE0]"
                placeholder="you@example.com"
              />
            </div>
            <div className="relative">
              <label className="block mb-1 text-sm font-medium">Password</label>
              <input
                type={showPassword? "password": "text"}
                name="password"
                onChange={handleChange}
                value={formData.password}
                className="w-full border border-[#9E3DAF] rounded-md px-4 py-2 pr-10 focus:outline-none focus:ring-2"
                placeholder="Password"
              />
              <div
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
             
            </div>
            <div className="relative"> 
              <label className="block mb-1 text-sm font-medium">Comfirm Password</label>
              <input
                type={showConfirmPassword? "password": "text"}
                name="confirmpassword"
                onChange={handleChange}
                value={formData.confirmpassword}
                className="w-full border  rounded-md px-4 py-2 focus:ring-[#D98CE0]"
                placeholder="Comfirm Password"
              />
               <div
                className="absolute right-3 top-[38px] cursor-pointer text-gray-500"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
             
            </div>
            <button
              type="submit"
              className="w-full bg-[#9E3DAF] text-white py-2 rounded-md hover:bg-light transition"
            >
              Register
            </button>
            <p className="text-sm text-center mt-3">
              Already have an account?{" "}
              <button
                type="button"
                className="text-primary-600 hover:underline"
                onClick={() => setFormType("login")}
              >
                Sign In
              </button>
            </p>
          </form>
        </>
      )}
    </motion.div>
  </div>
)}

    <nav className={`fixed top-0  left-0 w-full z-40 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="container py-4 px-0 flex justify-between items-center"
      >
        {/* Logo section */}
        <div className="px-10">
          <h1 className="font-bold text-2xl text-[#9E3DAF]">Study<span className="text-white">Sphere</span></h1>
        </div>
        {/* Menu section */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-3">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <HashLink
                  smooth
                  to={menu.path}
                  className="inline-block py-2 px-3 hover:text-secondary relative group"
                >
                  <div className="w-2 h-2 bg-[#9E3DAF] absolute mt-4 rounded-full left-1/2 -translate-x-1/2 top-1/2 bottom-0 group-active:block hidden"></div>
                  {menu.title}
                </HashLink>
              </li>
            ))}
            <button className="primary-btn" onClick={toggle} >Sign In</button>
          </ul>
        
        </div>

        {/* Mobile Hamburger menu section */}
        <div className="lg:hidden">
          <IoMdMenu className="text-4xl" />
        </div>
      </motion.div>
    </nav>
    </div>
    <ToastContainer/>
    </>
  );
};

export default Navbar;
