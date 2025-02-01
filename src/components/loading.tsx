import React from 'react';  

const Loading = () => {  
    return (  
        <div className="fixed top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-150">  
            <div className="loader w-16 h-16 border-8 border-t-8 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>  
        </div>  
    );  
};  

export default Loading;