import React, { useState } from "react";
import axios from "axios";

const Base_url = process.env.REACT_APP_BACKEND_URL;

const CustomModel = ({
  type,
  text,
  fields,
  formData,
  setFormData,
  handleSubmit,
  isOpen,
  onOpen,
  onClose,
  campaign,
}) => {

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <>
      <button
        onClick={onOpen}
        className="px-4 py-2 bg-teal-500 text-white rounded-md shadow-md hover:bg-teal-600"
      >
        {text}
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-lg p-6 rounded-md shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">{text}</h2>
              <button onClick={onClose} className="text-gray-600 text-xl">
                &times;
              </button>
            </div>

            <div className="space-y-4">
              {fields.map((field, index) => (
                <div key={index} className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={formData[field.name] || ""}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              ))}
            </div>

            <div className="flex justify-end space-x-4 mt-4">
              <button
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-100"
              >
                Cancel
              </button>
              {type === "create" ? (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                >
                  Create Field
                </button>
              ) : (
                <button
                  onClick={handleSubmit}
                  className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600"
                >
                  Edit
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModel;
