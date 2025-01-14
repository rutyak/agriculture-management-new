import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Base_url = process.env.REACT_APP_BACKEND_URL;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [role, setRole] = useState("Farmer");

  const navigate = useNavigate();
  const inputStyle =
    "w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 mobile:h-[30px] lg:h-[40px]";

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const storedRoleType = localStorage.getItem("roleType");
      if (storedRoleType) {
        navigate(storedRoleType === "Farmer" ? "/farmer" : "/admin");
      }
    }
  }, [navigate]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const obj = {
      email,
      password,
      role,
    };

    try {
      const res = await axios.post(`${Base_url}/login`, obj);

      if (res.status === 200) {
        if (isChecked) {
          localStorage.setItem("token", res.data.token);
        }

        localStorage.setItem("user", JSON.stringify(res?.data?.user));
        localStorage.setItem("roleType", res.data.user.role);

        navigate(res.data.user.role === "Farmer" ? "/farmer" : "/admin");
        toast.success("Login Successfully!");
      }
    } catch (error) {
      console.error(error.response?.data || error.message);
      const errorMessage =
        error.response?.data?.message || "Login failed. Please try again.";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-md mx-auto w-full p-6 mb-4 mt-5 bg-white mobile:p-0 md:p-2 lg:-5">
      <h1 className="text-3xl text-gray-800 font-semibold mb-2 text-center mobile:text-xl md:text-2xl lg:text-3xl">
        Welcome Back!
      </h1>
      <p className="text-md text-gray-600 mb-6 text-center mobile:text-[12px] mobile:mb-3 md:text-sm md:mb-4 lg:text-md lg:mb-6">
        Hey, welcome back to your special place
      </p>

      <form onSubmit={handleSubmit}>
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
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            <option value="Farmer">Farmer</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <div className="flex justify-between items-center mt-1 mb-6">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              className="form-checkbox text-purple-500"
            />
            <span className="ml-2 text-sm text-gray-600">Remember me</span>
          </label>
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-4 bg-purple-500 text-white rounded-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-purple-500 mobile:py-2 mobile:mt-3 md:mt-4 lg:mt-6"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      <p className="text-gray-600 mt-6 text-center">
        Don’t have an account?{" "}
        <span
          onClick={() => navigate("/signup")}
          className="text-purple-500 cursor-pointer hover:underline"
        >
          Sign Up
        </span>
      </p>
    </div>
  );
};

export default Login;
