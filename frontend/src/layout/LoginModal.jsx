import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { useEffect, useState } from 'react';
import Loader from '../components/loader';

export default function BasicModal({ onClose, isOpen }) {
  const API_URL = 'http://localhost:8000/api';

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [errors, setErrors] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({
    isLoading: false,
    isSuccess: null,
    message: "",
  });

  const handleInput = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 3) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    }
    setErrors(newErrors);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 3) {
      newErrors.password = "Password must be at least 8 characters long";
    } else if (!/[0-9]/.test(password)) {
      newErrors.password = "Password must contain at least one number";
    }
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      status.isLoading = true;

      const res = await fetch(`${API_URL}/signin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      if (res.ok) {
        localStorage.setItem('token', data.token);
        status.isLoading = false;
        status.isSuccess = true;
        status.message = "Connexion réussi !";
        setEmail("");
        setPassword("");
        setRemember(false);
        setErrors({ email: "", password: "" });
        getUser();
      } else {
        status.isLoading = false;
        status.isSuccess = false;
        setEmail("");
        setPassword("");
        setRemember(false);
        setErrors({ email: "", password: "" });
        newErrors.email = data.error;
        setErrors(newErrors);
      }
    }
  };

  async function getUser() {
    const token = localStorage.getItem('token');
    if (!token) {
      setStatus(true);
      return;
    }
    const res = await fetch(`${API_URL}/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    if (res.ok) {
      const user = await res.json();
      setTimeout(() => {
        onClose();
      }, 3000)
    } else {
      localStorage.removeItem('token');
      status.message = "Non connecté";
    }

    status.isLoading = false;
    status.isSuccess = true;
    status.message = null;
  }

  return (
    <Modal
      open={isOpen}
      onClose={onClose}
    >
      <Box className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center'>
        <div className='bg-white flex flex-col gap-6 lg:justify-evenly min-h-1/2 w-[300px] lg:w-[40vh] min-w-fit px-8 py-12 rounded-lg'>
          <div>
            <h1 className="text-black text-2xl 2xl:text-4xl font-semibold mb-1">Welcome back!</h1>
            <p className="text-black text-xs 2xl:text-lg mb-6">Enter your Credentials to access your account</p>
            {status.message && (
              <p className={`${!status.isSuccess ? "text-red-700" : "text-blue-500"} text-center text-xs 2xl:text-lg`}>
                {status.message}
              </p>
            )}
          </div>

          <form id="login-form" onSubmit={handleSubmit} onInput={handleInput} className='flex flex-col gap-2.5'>
            <div>
              <label
                htmlFor="email"
                className="block text-[10px] lg:text-[14px] font-semibold text-black mb-1"
              >
                Email address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className={`w-full mb-1 px-3 py-2 border rounded-md text-xs lg:text-[16px] text-black placeholder-gray-300 focus:outline-none focus:ring-1 disabled:bg-gray-100
                  ${errors.email ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-gray-300"}`}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={status.isLoading}
              />
              {errors.email && (
                <div className="text-red-500 text-xs mb-2">{errors.email}</div>
              )}
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label
                  htmlFor="password"
                  className="text-[10px] lg:text-[14px] font-semibold text-black"
                >
                  Password
                </label>
                <a href="#" className="text-[10px] text-blue-700 hover:underline">
                  forgot password
                </a>
              </div>
              <input
                id="password"
                type="password"
                placeholder="Password"
                className={`w-full mb-1 px-3 py-2 border rounded-md text-xs lg:text-[16px] text-black placeholder-gray-300 focus:outline-none focus:ring-1 disabled:bg-gray-100
                  ${errors.password ? "border-red-500 focus:ring-red-300" : "border-gray-200 focus:ring-gray-300"}`}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={status.isLoading}
              />
              {errors.password && (
                <div className="text-red-500 text-xs mb-2">{errors.password}</div>
              )}
            </div>

            <div className="flex items-center mb-4">
              <input
                id="remember"
                type="checkbox"
                className="w-3 h-3 text-black border-gray-300 rounded"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                disabled={status.isLoading}
              />
              <label
                htmlFor="remember"
                className="ml-2 text-[8px] lg:text-[11px] text-black select-none"
              >
                remember for 30 days
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 text-white text-[10px] lg:text-[18px] font-semibold py-2 rounded-md hover:bg-red-600 transition-colors disabled:bg-white"
              disabled={status.isLoading}
            >
              {status.isLoading && (
                <Loader className='loader-infinite justify-self-center' />
              ) || !status.isLoading && (
                "Login"
              )}
            </button>
          </form>

          <div>
            <p className="text-[10px] lg:text-[12px] text-black text-center lg:mt-10 m-0">
              Don’t have an account?
              <a href="#" className="text-blue-700 hover:underline">Sign Up</a>
            </p>
          </div>
        </div>
      </Box>
    </Modal >
  );
}
