import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const InputPassword = ({
  name,
  type = "password",
  placeholder,
  state,
  setPassword,
}) => {
  const [showPass, setShowPass] = useState(false);

  return (
    <div className="relative mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
    
      <button
        type="button"
        onClick={() => setShowPass(!showPass)}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
        aria-label="Toggle Password Visibility"
      >
        {showPass ? (
          <FaEyeSlash className="h-5 w-5" />
        ) : (
          <FaEye className="h-5 w-5" />
        )}
      </button>
    </div>
  );
};

export default InputPassword;
