const AdminTable = ({fields}) => {
  return (
    <table className="w-full table-auto border-collapse border border-gray-300">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-300 px-4 py-2">Field Name</th>
          <th className="border border-gray-300 px-4 py-2">Latitude</th>
          <th className="border border-gray-300 px-4 py-2">Longitude</th>
          <th className="border border-gray-300 px-4 py-2">Crop Type</th>
          <th className="border border-gray-300 px-4 py-2">Area Size</th>
        </tr>
      </thead>
      <tbody>
        {fields.map((field) => (
          <tr key={field.id} className="hover:bg-gray-100">
            <td className="border border-gray-300 px-4 py-2">
              {field.fieldName}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {field.location.latitude}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {field.location.longitude}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {field.cropType}
            </td>
            <td className="border border-gray-300 px-4 py-2">
              {field.areaSize} acres
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AdminTable;
