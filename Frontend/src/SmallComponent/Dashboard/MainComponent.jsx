import React,{useEffect} from 'react';
import Card from './Card';
import { useRecoilValue } from 'recoil';
import { isClient,useFetchAndUpdateUserData,userDataAtom } from '../../../recoil/atoms';

const MainContent = ({ sidebarOpen }) => {
    const fetchData = useFetchAndUpdateUserData();
    const Client = useRecoilValue(isClient);
    const data = useRecoilValue(userDataAtom);

    if (!Client) {
        return <Navigate to="/" />;
    }

    useEffect(()=>{
        fetchData();
    },[])
    console.log(data)
    return (
        <div className={`flex flex-col  top-16 bg-gray-100 justify-center items-center h-screen p-0 bg-white dark:bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
            <Card />
            <Card />    
            <Card />
        </div>
    );
}

export default MainContent;
