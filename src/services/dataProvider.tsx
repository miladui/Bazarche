"use client";
import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import axios from 'axios';

// 1. تعریف اینترفیس برای نوع داده‌ای که قراره توی Context ذخیره بشه
interface DataType {
    data: any;
    loading: boolean;
    error: string | null;
}

// 2. تعریف اینترفیس برای مقدار context
interface DataContextType {
    dataState: DataType;
    fetchData: () => Promise<void>;
    setDataState: (data: DataType) => void;
}

// 3. مقدار اولیه برای context
const initialDataState: DataType = {
    data: null,
    loading: false,
    error: null,
};


// 4. ایجاد context
const DataContext = createContext<DataContextType>({
    dataState: initialDataState,
    fetchData: async () => {},
});


// 5. تعریف provider
interface DataProviderProps {
    children: ReactNode;
}

const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
    const [dataState, setDataState] = useState<DataType>(initialDataState);

    const fetchData = async () => {
        setDataState(prev => ({...prev, loading: true, error: null}));
        try {
            const response = await axios.get('https://api.escuelajs.co/api/v1/products');
            setDataState(prev => ({...prev, data: response.data, loading: false}));
        } catch (error: any) {
            setDataState(prev => ({...prev, loading: false, error: error.message}));
        }
    };


    return (
        <DataContext.Provider value={{dataState, fetchData, setDataState}}>
            {children}
        </DataContext.Provider>
    );
};

// 6. ایجاد hook سفارشی برای دسترسی آسان به context
const useData = (): DataContextType => {
    const context = useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within a DataProvider');
    }
    return context;
};


export { DataProvider, useData };
