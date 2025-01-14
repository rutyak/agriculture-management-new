import React, { useState, useEffect } from "react";
import axios from "axios";
import CustomModel from "../../components/CustomModel";
import ProfileDrawer from "../../components/ProfileDrawer";
import FieldCard from "../../components/FieldCard";
import { toast } from "react-toastify";

const Base_url = process.env.REACT_APP_BACKEND_URL;

const FarmerDashboard = () => {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({
    fieldName: "",
    latitude: "",
    longitude: "",
    cropType: "",
    areaSize: "",
  });
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [editingField, setEditingField] = useState(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => {
    setIsOpen(false);
    setEditingField(null); // Reset editing state on close
  };

  const fieldInputs = [
    { name: "fieldName", label: "Field Name", type: "text" },
    { name: "latitude", label: "Latitude", type: "number" },
    { name: "longitude", label: "Longitude", type: "number" },
    { name: "cropType", label: "Crop Type", type: "text" },
    { name: "areaSize", label: "Area Size (in acres)", type: "number" },
  ];

  const fetchFields = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${Base_url}/fetch/field`);
      setFields(response.data);
    } catch (error) {
      console.error("Error fetching fields:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      if (editingField) {
        await axios.patch(
          `${Base_url}/update/field/${editingField._id}`,
          formData
        );
        toast.success("Field updated successfully!");
      } else {
        await axios.post(`${Base_url}/create/field`, formData);
        toast.success("Field added successfully!");
      }
      setFormData({
        fieldName: "",
        latitude: "",
        longitude: "",
        cropType: "",
        areaSize: "",
      });
      fetchFields();
      onClose();
    } catch (error) {
      console.error("Error saving field:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleEditField = (field) => {
    console.log("edit cliked !!!");

    setEditingField(field);
    setFormData({
      fieldName: field.fieldName,
      latitude: field.latitude,
      longitude: field.longitude,
      cropType: field.cropType,
      areaSize: field.areaSize,
    });
    onOpen();
  };

  async function handleDelete(id) {
    console.log("delete clicked!!");
    setLoading(true);
    try {
      await axios.delete(`${Base_url}/delete/field/${id}`);
      toast.success("Field deleted successfully!");
      fetchFields();
    } catch (error) {
      console.error("Error deleting field:", error);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchFields();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-600">Farmer Dashboard</h1>
        <div className="flex items-center gap-4">
          <CustomModel
            type={editingField ? "edit" : "create"}
            text={editingField ? "Edit Field" : "Add New Field"}
            fields={fieldInputs}
            formData={formData}
            setFormData={setFormData}
            handleSubmit={handleSubmit}
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
          />
          <ProfileDrawer />
        </div>
      </div>

      <hr className="border-gray-300 mb-6" />

      <div>
        <h2 className="text-2xl font-semibold mb-4">My Fields</h2>
        {loading ? (
          <p className="text-center text-gray-500">Loading fields...</p>
        ) : fields.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {fields.map((field) => (
              <FieldCard
                key={field._id}
                field={field}
                onEdit={handleEditField}
                onDelete={handleDelete}
              />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">
            No fields added yet. Use the "Add New Field" button to get started!
          </p>
        )}
      </div>
    </div>
  );
};

export default FarmerDashboard;
