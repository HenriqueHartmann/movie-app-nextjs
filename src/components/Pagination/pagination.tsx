function Pagination() {
    return (
        <div className="flex justify-center items-center p-6">
            <nav className="flex items-center space-x-1 text-gray-800 font-medium">
                {/* Previous Button */}
                <button
                    className="w-28 h-10 rounded-md border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 flex items-center justify-center px-2 cursor-pointer"
                >
                    &lt; Previous
                </button>

                {/* Page Buttons */}
                <button className="w-10 h-10 border border-gray-400 bg-gray-200 text-black font-semibold cursor-default">
                    1
                </button>
                <button className="w-10 h-10 border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
                    2
                </button>
                <button className="w-10 h-10 border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
                    3
                </button>
                <span className="w-10 h-10 flex items-center justify-center text-gray-500">...</span>
                <button className="w-10 h-10 border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 cursor-pointer">
                    7
                </button>

                {/* Next Button */}
                <button
                    className="w-28 h-10 rounded-md border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 flex items-center justify-center px-2 cursor-pointer"
                >
                    Next &gt;
                </button>
            </nav>
        </div>
    )
}

export default Pagination
