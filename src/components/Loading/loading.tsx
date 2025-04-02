function Loading() {
    return (
        <div className='flex items-center justify-center min-h-screen'>
            <div className="w-8 h-8 border-4 border-indigo-400 rounded-full animate-spin loading-icon-top-border"></div>
            <p className="ml-2">loading...</p>
        </div>
    )
}

export default Loading
