import React, { useEffect, useState } from 'react';

function Pagination({
    currentPage,
    lastPage,
    onPrevious,
    onNext,
    onSelectPage,
}: {
    currentPage: number;
    lastPage: number;
    onPrevious: () => void;
    onNext: () => void;
    onSelectPage: (page: number) => void;
}) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 800);
        };

        handleResize(); // check on load
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getPaginationList() {
        const totalVisiblePages = isMobile ? 3 : 5;
        const pageBuffer = Math.floor(totalVisiblePages / 2);
        const paginationList = [];

        const createButton = (page: number, isActive = false) => (
            <button
                key={`key-movie-page-${page}`}
                onClick={() => onSelectPage(page)}
                className={`min-w-[40px] px-2 h-10 flex-shrink-0 rounded border border-gray-400 ${isActive
                        ? 'bg-gray-200 text-black font-semibold cursor-default'
                        : 'text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 cursor-pointer'
                    }`}
            >
                {page}
            </button>
        );

        paginationList.push(createButton(1, currentPage === 1));

        if (currentPage - pageBuffer > 2) {
            paginationList.push(
                <span key="start-ellipsis" className="w-10 h-10 flex items-center justify-center text-gray-500 flex-shrink-0">...</span>
            );
        }

        const startPage = Math.max(2, currentPage - pageBuffer);
        const endPage = Math.min(lastPage - 1, currentPage + pageBuffer);

        for (let i = startPage; i <= endPage; i++) {
            paginationList.push(createButton(i, i === currentPage));
        }

        if (currentPage + pageBuffer < lastPage - 1) {
            paginationList.push(
                <span key="end-ellipsis" className="w-10 h-10 flex items-center justify-center text-gray-500 flex-shrink-0">...</span>
            );
        }

        if (lastPage > 1) {
            paginationList.push(createButton(lastPage, currentPage === lastPage));
        }

        return paginationList;
    }

    return (
        <div className="flex justify-center items-center p-4">
            <nav className="flex flex-wrap items-center gap-2 text-gray-800 font-medium">
                <button
                    className="w-24 sm:w-28 h-10 rounded-md border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 flex items-center justify-center px-2 cursor-pointer shrink-0 gap-1"
                    onClick={onPrevious}
                >
                    <span className="text-lg">&lt;</span>
                    <span className="text-sm sm:text-base">Previous</span>
                </button>

                {getPaginationList()}

                <button
                    className="w-24 sm:w-28 h-10 rounded-md border border-gray-400 text-gray-700 bg-white hover:bg-gray-100 transition-colors duration-150 flex items-center justify-center px-2 cursor-pointer shrink-0 gap-1"
                    onClick={onNext}
                >
                    <span className="text-sm sm:text-base">Next</span>
                    <span className="text-lg">&gt;</span>
                </button>
            </nav>
        </div>
    );
}

export default Pagination;
