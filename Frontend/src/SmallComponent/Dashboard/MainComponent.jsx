import React, { useEffect, useState } from 'react';
import Card from './Card';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { isClient, userDataAtom } from '../../../recoil/atoms';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

const MainContent = ({ sidebarOpen }) => {
    const Client = useRecoilValue(isClient);
    const setUserDataAtom = useSetRecoilState(userDataAtom);
    const userData = useRecoilValue(userDataAtom);
    const [totalEnquiries, setTotalEnquiries] = useState(0);
    const [totalSuccess, setTotalSuccess] = useState(0);
    const [totalEmployees, setTotalEmployees] = useState(0);

    if (!Client) {
        return <Navigate to="/" />;
    }

    async function fetchData() {
        try {
            const response = await axios.get('http://localhost:3000/empmng/admin/bulk', {
                withCredentials: true
            });
            setUserDataAtom(response.data);
            console.log(response.data.employees);
        } catch (error) {
            console.error('Error fetching user data:', error);
            throw error;
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (userData && userData.employees) {
            // Calculate total enquiries
            const totalEnquiries = userData.employees.reduce((acc, employee) => {
                return acc + employee.enquiries;
            }, 0);
            setTotalEnquiries(totalEnquiries);

            // Calculate total success
            const totalSuccess = userData.employees.reduce((acc, employee) => {
                return acc + employee.success;
            }, 0);
            setTotalSuccess(totalSuccess);

            // Calculate total number of employees
            const totalEmployees = userData.employees.length;
            setTotalEmployees(totalEmployees);
        }
    }, [userData]);

    return (
        <div className={`relative top-16 h-screen bg-gray-600 ${sidebarOpen ? 'ml-64' : 'sm:ml-64'}`}>
            <img src="/emplog.gif" alt="Sahil GIF" className="cursor-pointer absolute brightness-25 opacity-50 inset-0 z-0 w-full h-full object-cover" />
            <div className="relative top-32 z-10 flex flex-col justify-center items-center p-0">
                <Card title="Enquiries" value={totalEnquiries} />
                <Card title="Success" value={totalSuccess} />
                <Card title="Employees" value={totalEmployees} />
            </div>
        </div>
    );
}

export default MainContent;
