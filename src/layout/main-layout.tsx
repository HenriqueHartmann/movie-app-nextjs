import Sidebar from "@/components/Sidebar/sidebar"

function MainLayout({children}: {children: any}) {
    return (
        <div className="flex">
            <div className="fixed h-screen">
                <Sidebar />
            </div>
            <div className="ml-16 flex-1">
                {children}
            </div>
        </div>
    )
}

export default MainLayout
