import React from 'react';

export const LoginForm = ({ onClick }) => {
  return (
    <>
      <div className="flex flex-col p-2">
        <div className="flex flex-col -space-y-px shadow-sm">
          <h2 className="text-3xl font-extrabold mb-4 self-center text-slate-600">
            Login
          </h2>
          <label htmlFor="username" className="sr-only">
            Username
          </label>
          <input
            type="text"
            aria-label="username"
            className="border p-2 rounded-t-md"
            placeholder="Username"
          />
          <label htmlFor="password" className="sr-only">
            Password
          </label>
          <input
            type="password"
            aria-label="password"
            className="border p-2 rounded-b-md"
            placeholder="Password"
          />
        </div>
        <button
          onClick={onClick}
          className="text-white text-xl font-bold bg-slate-600 p-2 rounded-md mt-4"
        >
          Login
        </button>
      </div>
    </>
  );
};
