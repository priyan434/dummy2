
const DashBoard = () => {
  return (<div className="p-6">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">Dashboard </h1>
      <div className="flex justify-center items-center font-medium mt-3 gap-x-10">

        <div
          className="h-56 w-72 rounded-lg shadow-lg border border-gray-200 bg-white p-4 "
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Dashboard</h2>
        </div>
        <div
          className="h-56 w-72 rounded-lg shadow-lg border border-gray-200 bg-white p-4 f"
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Dashboard</h2>
        </div>
        <div
          className="h-56 w-72 rounded-lg shadow-lg border border-gray-200 bg-white p-4 "
        >
          <h2 className="text-lg font-semibold text-gray-700 mb-3">Dashboard</h2>
        </div>

      </div>
    </div>);
};

export default DashBoard;
