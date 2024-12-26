const Graph = (props) => {
  return (
    <div className="p-6">
      <h1 className="text-center text-3xl font-semibold text-gray-800 mb-6">graph</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="h-56 w-full rounded-lg  border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">graph</h2>
        </div>
        <div className="h-56 w-full rounded-lg  border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">graph</h2>
        </div>
        <div className="h-56 w-full rounded-lg  border border-gray-200 bg-white p-4">
          <h2 className="text-lg font-semibold text-gray-700 mb-3">graph</h2>
        </div>
      </div>
    </div>
  );
};

export default Graph;
