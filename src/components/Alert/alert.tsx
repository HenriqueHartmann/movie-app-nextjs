function Alert() {
    return (
        <div
            className="font-regular relative block w-full max-w-screen-md rounded-lg bg-green-500 px-4 py-4 text-base text-white"
            data-dismissible="alert"
        >
            <div className="absolute top-4 left-4">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    className="mt-px h-6 w-6"
                >
                    <path
                        fill-rule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                        clip-rule="evenodd"
                    ></path>
                </svg>
            </div>
            <div className="ml-8 mr-12">
                <h5 className="block font-sans text-xl font-semibold leading-snug tracking-normal text-white antialiased">
                    Success
                </h5>
                <p className="mt-2 block font-sans text-base font-normal leading-relaxed text-white antialiased">
                    I don't know what that word means. I'm happy. But success, that goes
                    back to what in somebody's eyes success means. For me, success is inner
                    peace. That's a good day for me.
                </p>
            </div>
            <div
                data-dismissible-target="alert"
                data-ripple-dark="true"
                className="absolute top-3 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
            >
                <div role="button" className="w-max rounded-lg p-1">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </div>
            </div>
        </div>
    )
}

export default Alert
