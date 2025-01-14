import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import AdminTable from "./AdminTable";
import CustomModel from "../../components/CustomModel";
import ProfileDrawer from "../../components/ProfileDrawer";

const Base_url = process.env.REACT_APP_BACKEND_URL;

const AdminDashboard = () => {
  const [fields, setFields] = useState([]);
  const [selectedField, setSelectedField] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${Base_url}/fetch/field`);
      setFields(res.data);
    } catch (error) {
      toast.error("Error fetching field data. Please try again later.");
      console.error("Error fetching field data:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleFormSubmit = async (data) => {
    try {
      if (selectedField) {
        await axios.put(`${Base_url}/update/field/${selectedField.id}`, data);
      } else {
        await axios.post(`${Base_url}/create/field`, data);
      }
      fetchData();
      toast.success("Field details saved successfully!");
    } catch (error) {
      toast.error("Error saving field details. Please try again.");
      console.error("Error submitting form:", error);
    }
  };

  const handleDeleteField = async (id) => {
    if (window.confirm("Are you sure you want to delete this field?")) {
      try {
        await axios.delete(`${Base_url}/delete/field/${id}`);
        fetchData();
        toast.success("Field deleted successfully!");
      } catch (error) {
        toast.error("Error deleting field. Please try again.");
        console.error("Error deleting field:", error);
      }
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen p-6 bg-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Admin Dashboard</h1>
        <div className="flex items-center gap-4">
          <ProfileDrawer />
        </div>
      </div>

      <div className="my-8">
        <div className="w-full max-w-6xl mx-auto p-6 rounded-lg bg-white shadow-md">
          <h2 className="text-xl text-center mb-4 text-indigo-700">
            Field List
          </h2>
          {loading ? (
            <p className="text-center text-gray-500">Loading fields...</p>
          ) : fields.length === 0 ? (
            <p className="text-center text-gray-500">No fields found.</p>
          ) : (
            <AdminTable fields={fields} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
