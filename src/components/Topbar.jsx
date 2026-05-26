import { FaSearch, FaUserCircle } from "react-icons/fa";

export default function Topbar({ search, setSearch }) {
  return (
    <div className="bg-white rounded-2xl shadow px-6 py-4 flex items-center justify-between mb-8">

      {/* Search */}
      <div className="flex items-center bg-gray-100 px-4 py-2 rounded-xl w-96">
        <FaSearch className="text-gray-500 mr-3" />

        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search subjects..."
          className="bg-transparent outline-none w-full"
        />
      </div>

      {/* User */}
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-3xl text-gray-600" />

        <div>
                      <p className="font-semibold">
              {localStorage
                .getItem("user")
                ?.split("@")[0] || "Guest"}
            </p>
          <p className="text-sm text-gray-500">
                      {localStorage.getItem("user")
            ? "Logged In"
            : "Not Logged In"}
          </p>
        </div>
      </div>

    </div>
  );
}