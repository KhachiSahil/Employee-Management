import React from 'react';
import Card from './Card';



const MainContent = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-screen p-0 bg-white dark:bg-gray-600 sm:ml-64">
                <Card />
                <Card />
                <Card />
            </div>
        </>
    );
}

export default MainContent;