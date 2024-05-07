import React, { useEffect } from 'react';
import Card from './Card';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isClient, userDataAtom } from '../../../recoil/atoms';
import axios from 'axios';

const MainContent = ({ sidebarOpen }) => {
    const Client = useRecoilValue(isClient);
    const setUserDataAtom = useSetRecoilState(userDataAtom);
    
    if (!Client) {
        return <Navigate to="/" />;
    }

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/empmng/admin/bulk', {
                withCredentials: true
            });
            setUserDataAtom(response.data);
            console.log(response.data);
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className={`relative top-16  h-screen bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
            <img src="/emplog.gif" alt="Sahil GIF" className="cursor-pointer absolute brightness-25 opacity-50  inset-0 z-0 w-full h-full object-cover" />
            <div className="relative top-32  z-10 flex flex-col justify-center items-center p-0">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default MainContent;
