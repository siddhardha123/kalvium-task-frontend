import React, { useState} from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
const Login = () => {

  const { login } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async (e) => {
    if(username){
        login(username);
        navigate('/home')
    }
  };

  return (
    <>
    <div className="min-h-screen flex flex-col space-y-5 items-center justify-center">
       <p className='text-red-600 text-6xl'>Kalvium</p>
      <div className="bg-black p-8 rounded-xl shadow-md w-96">
        <h2 className="text-2xl text-white font-semibold mb-6 text-center">Login to your account</h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-white font-bold mb-2">UserName</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="anil gulecha"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white font-bold mb-2">Password</label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="*********"
            />
          </div>
          <button
            type="submit"
            className="bg-[#004e96] text-white  rounded w-full py-2 px-3 "
          >
            Login
          </button>
        </form>
       
      </div>
    </div>
    
    </>
  );
};

export default Login;