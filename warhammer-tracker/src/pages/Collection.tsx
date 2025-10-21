export default function Collection() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-8">
      <div className="bg-gray-100 rounded-2xl p-6 shadow-md ">
        <h2 className="text-2xl font-bold mb-2">My Collection</h2>
        <p className="text-gray-800">Overview of all miniatures owned</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md ">
          <h2 className="text-xl font-semibold mb-4">Progress</h2>
          <p>Owned Models: <span className="font-bold">120</span></p>
          <p>Models Painted: <span className="font-bold">65%</span></p>
          <p>Models Unpainted: <span className="font-bold">35%</span></p>
        </div>
        <div className="bg-gray-100 rounded-2xl p-6 shadow-md ">
          <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
          <p>Total Armies Owned: <span className="font-bold">4</span></p>
          <p>Favourite Faction: <span className="font-bold">Chaos</span></p>
          <p>Days Since Last Painting Session: <span className="font-bold">5</span></p>
        </div>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6 shadow-md ">
        <h2 className="text-2xl font-semibold mb-4">Collection List</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-100 rounded-xl p-4 text-center shadow-md">
            <img
              src="https://www.adeptusars.com/wp-content/uploads/2023/06/Chaos-Lord-2024-Model.jpg"
              alt="Model"
              className="w-full h-48 object-cover rounded-xl mb-4"
            />
            <p className="font-bold">Chaos Lord</p>
            <p>Faction: Chaos Space Marines</p>
            <p>Status: <span className="text-green-400">Painted</span></p>
            <p className=" text-sm mt-2">Notes: Great detailing on the armor.</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 rounded-2xl p-6 shadow-md ">
        <h2 className="text-2xl font-semibold mb-4">Add New Model</h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1">Model Name:</label>
            <input
              type="text"
              name="modelName"
              className="w-full bg-gray-100  p-2 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-1">Faction:</label>
            <input
              type="text"
              name="faction"
              className="w-full bg-gray-100  p-2 rounded-lg"
            />
          </div>
          <div>
            <label className="block mb-1">Status:</label>
            <select
              name="status"
              className="w-full bg-gray-100  p-2 rounded-lg"
            >
              <option value="painted">Painted</option>
              <option value="unpainted">Unpainted</option>
              <option value="inProgress">In Progress</option>
            </select>
          </div>
          <div>
            <label className="block mb-1">Notes:</label>
            <textarea
              name="notes"
              className="w-full bg-gray-100 text-white p-2 rounded-lg"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg font-semibold"
          >
            Add Model
          </button>
        </form>
      </div>
    </div>
  )
}


 {/*
                Loop through user's collection from database and display each model with details
                Make into carasouel or grid view for better UX
                Move add model form into a modal popup for cleaner interface or separate page
                */}

                 {/* Backend Todo:
                    Drop down to model from known Warhammer factions
                    On submit, save model details to database associated with user
                    Validate inputs
                    Clear form after submission
                    Provide feedback on successful addition */}
