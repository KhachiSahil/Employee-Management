import React,{useEffect} from 'react';
import Card from './Card';
import { useSetRecoilState,useRecoilValue } from 'recoil';
import { isClient,userDataAtom } from '../../../recoil/atoms';
import axios from 'axios';

const MainContent = ({ sidebarOpen }) => {
    const Client = useRecoilValue(isClient);
    const setUserDataAtom = useSetRecoilState(userDataAtom);
    
    if (!Client) {
        return <Navigate to="/" />;
    }
    async function fetchData(){

        try {
            const response = await axios.get('http://localhost:3000/empmng/admin/bulk',{
              withCredentials:true
            });
            setUserDataAtom(response.data);
            console.log(response.data)
          } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
          }
    }

    useEffect(()=>{
        fetchData();
    },[])
    return (
        <div className={`flex flex-col  top-16 bg-gray-100 justify-center items-center h-screen p-0 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
            <Card />
            <Card />    
            <Card />
        </div>
    );
}

export default MainContent;
