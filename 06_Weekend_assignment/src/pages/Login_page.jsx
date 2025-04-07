import React, { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { auth_user } from "../api/Authentication/auth_api";
import { Outlet, useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: auth_user,
    onSuccess: (data) => {
      localStorage.setItem("accesstoken", data.accessToken);
      localStorage.setItem("islogged", "true");
      queryClient.invalidateQueries(["user"]);
      if (data.username === username) navigate("/user_list");
      setUsername('');
      setPassword('')
    },
    onError: () => {
      localStorage.setItem("islogged", false);
    },
  });

  const handleLogin = (e) => {
    e.preventDefault();
    mutation.mutate({ username, password });
  };

  return (
    <>
    <div className="min-h-[500px] flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-gray-700 mb-1">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
  
          <div>
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
              required
            />
          </div>
  
          {mutation.isError && (
            <div className="text-gray-600 text-sm">Login failed. Please try again.</div>
          )}
  
          <button
            type="submit"
            className="w-full bg-gray-800 text-white py-2 rounded-md hover:bg-gray-900 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  </>
  );
};

export default LoginPage;
