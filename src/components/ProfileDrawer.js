import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileDrawer = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setName(storedUser.name);
      setEmail(storedUser.email);
      setRole(storedUser.role);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    toast.success("Logged out successfully.");
    navigate("/");
  };

  return (
    <>
      <div className="cursor-pointer" onClick={() => setIsOpen(true)}>
        <img
          src="https://bit.ly/dan-abramov"
          alt="Profile"
          className="w-12 h-12 rounded-full"
        />
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="fixed right-0 top-0 w-[320px] h-full bg-white shadow-xl p-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <div>
                <img
                  src="https://bit.ly/dan-abramov"
                  alt="Avatar"
                  className="w-16 h-16 rounded-full mb-2"
                />
                <p className="mt-2 text-lg font-semibold">
                  {role === "Farmer" ? "Your Company" : name}
                </p>
                <p className="text-gray-500">{email}</p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-xl text-gray-600"
              >
                &times;
              </button>
            </div>
            <div className="mt-8">
              <button
                onClick={handleLogout}
                className="w-full py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProfileDrawer;
