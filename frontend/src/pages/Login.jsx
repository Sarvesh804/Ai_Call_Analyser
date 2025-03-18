import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useAuth } from "../context/AuthContext"; // Import useAuth for authentication context
import { Navigate } from "react-router-dom"; // For navigation after login

const Login = () => {
  const { user,login, error, loading, isAuthenticated } = useAuth(); // Using isAuthenticated to check login status
  const [eid, setEid] = useState(""); // State for Employee ID (EID)
  const [password, setPassword] = useState(""); // State for password
  const [formError, setFormError] = useState(""); // State for form validation errors

  // Function to handle the login process
  const handleLogin = async (e) => {
    e.preventDefault();
    // Basic validation: check if both EID and password are provided
    if (!eid || !password) {
      setFormError("Please enter both Employee ID and password.");
      return;
    }

    setFormError(""); // Clear any previous form validation errors

    // Call login function from AuthContext, passing EID and password
    await login(eid, password);
  };

  // Redirect the user to the dashboard if authenticated
  if (isAuthenticated && user?.role === "admin") {
    return <Navigate to="/dashboard/usermanagement" replace />; // Redirect to dashboard if the user is authenticated
  }
  if (isAuthenticated || (user?.role === "employee " || user?.role === "manager")) {
    return <Navigate to="/dashboard" replace />; // Redirect to dashboard if the user is authenticated
  }
  // if(!isAuthenticated){
  //   return <Navigate to="/login" replace />; // Redirect to dashboard if the user is authenticated

  // }

  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen p-4">

      <div className="bg-black text-white p-4 rounded-lg mb-6 w-full max-w-sm">
        
        <p className="text-sm font-semibold">🔑 Demo Credentials:</p>

           <div className="mt-3">
            <p className="text-xs font-bold">👤 <b>Manager</b></p>
            <p className="text-xs">🆔 <b>Username:</b> manager123</p>
            <p className="text-xs">🔒 <b>Password:</b> managerpass</p>
          </div>

          <div className="mt-3">
            <p className="text-xs font-bold">👤 <b>Employee</b></p>
            <p className="text-xs">🆔 <b>Username:</b> employee123</p>
            <p className="text-xs">🔒 <b>Password:</b> employeepass</p>
          </div>

        <p className="text-xs mt-3 opacity-75">For admin see documentation.</p>
      </div>
      
      <h1 className="text-2xl font-bold mb-4">Login</h1>

      <form className="w-full max-w-sm" onSubmit={(e) => handleLogin}> {/* Prevent form submission to refresh page */}
        {/* EID Input */}
        <Input
          type="text"
          placeholder="Employee ID"
          value={eid}
          onChange={(e) => setEid(e.target.value)} // Handle EID input change
          required
          className="mb-4"
        />

        {/* Password Input */}
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Handle password input change
          required
          className="mb-4"
        />

        {/* Login Button */}
        <Button onClick={handleLogin} className="w-full" disabled={loading}>
          {loading ? "Logging in..." : "Login"} {/* Show loading state during login */}
        </Button>

        {/* Show form validation or login errors */}
        {formError && <p className="text-red-500 mt-4">{formError}</p>} {/* Form validation errors */}
        {error && <p className="text-red-500 mt-4">{error}</p>} {/* Authentication-related errors */}
      </form>
    </div>
  );
};

export default Login;
