import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Base_url = process.env.REACT_APP_BACKEND_URL;

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [role, setRole] = useState("");

  const navigate = useNavigate();
  const inputStyle =
    "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mobile:h-[30px] lg:h-[40px]";

  async function handleSubmit(e) {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    if (!role) {
      alert("Please select a role (Farmer/Admin).");
      return;
    }

    setLoading(true);

    try {
      const userData = { name, email, password, role };
      const res = await axios.post(`${Base_url}/signup`, userData);

      if (res.status === 201) {
        setLoading(false);
        toast.success("User registered successfully!");
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
      console.error("error message: ", error);
      const errorMessage =
        error.response?.data?.message ||
        "Something went wrong. Please try again.";
      toast.error(errorMessage);
    }
  }

  return (
    <div className="max-w-md mx-auto w-full p-6 mb-4 mt-5 bg-white mobile:p-0 md:p-2 lg:p-3">
      <h1 className="text-3xl text-gray-800 font-semibold mb-2 text-center mobile:text-xl md:text-2xl lg:text-3xl">
        Sign Up
      </h1>
      <p className="text-md text-gray-600 mb-6 text-center  mobile:text-[12px] mobile:mb-2 md:text-sm md:mb-3 lg:text-md lg:mb-4">
        Create your account to keep up with news!
      </p>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={inputStyle}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Role
          </label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className={inputStyle}
          >
            <option value="" disabled>
              Choose role
            </option>
            <option value="Farmer">Farmer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-6 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 mobile:py-2 mobile:mt-3 md:mt-3 lg:mt-4"
          disabled={loading}
        >
          {loading ? "Please wait..." : "Sign Up"}
        </button>
      </form>

      <p className="text-gray-600 mt-3 text-center">
        Have an account already?{" "}
        <span
          onClick={() => navigate("/")}
          className="text-purple-500 cursor-pointer hover:underline"
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignUp;
