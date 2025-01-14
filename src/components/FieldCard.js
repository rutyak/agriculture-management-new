const FieldCard = ({ field, onEdit, onDelete }) => {
  return (
    <div
      key={field._id}
      className="p-4 bg-white shadow rounded-lg hover:shadow-lg transition"
    >
      <h3 className="text-lg font-bold text-blue-500">{field.fieldName}</h3>
      <p className="text-gray-700 mt-2">
        Location: {field.location.latitude}, {field.location.longitude}
      </p>
      <p className="text-gray-700 mt-2">Crop Type: {field.cropType}</p>
      <p className="text-gray-700 mt-2">Area Size: {field.areaSize} acres</p>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => onEdit(field)}
        >
          Edit
        </button>
        <button
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          onClick={() => onDelete(field._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default FieldCard;
