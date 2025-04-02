import HttpErrorComponentParams from "@/types/Error/http-error-component-params"

function HttpError({ status, title, message, buttonText = "Try again...", onClickCallback}: HttpErrorComponentParams) {
    return (
        <div className="w-full px-16 flex items-center justify-center">
            <div className="bg-white border border-gray-200 flex flex-col items-center justify-center px-4 md:px-8 lg:px-24 py-8 rounded-lg shadow-2xl">
                <p className="text-6xl md:text-7xl lg:text-9xl font-bold tracking-wider text-gray-300">{status}</p>
                <p className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-wider text-gray-500 mt-4">{title}</p>
                <p className="text-gray-500 mt-6 text-center">{message}</p>
                <button className="w-full mt-9 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors" onClick={onClickCallback}>
                    {buttonText}
                </button>
            </div>
        </div>
    )
}

export default HttpError
