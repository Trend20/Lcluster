import React from "react";

const Signup = () => {
  return (
    <div className="space-y-6 lg:col-span-2">
      <div className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <button className="w-full">Sign up with Google</button>
          <button className="w-full">Sign up with GitHub</button>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="email">Email</label>
          <input id="email" placeholder="@" required type="email" />
        </div>
        <button className="w-full" type="submit">
          Create an account
        </button>
      </div>
    </div>
  );
};

export default Signup;
