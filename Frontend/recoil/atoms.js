import { atom,selector,useRecoilState, useRecoilValue  } from 'recoil';
import axios from 'axios';


export const isClient = atom({
  key: 'isClient',
  default: 'sahil',
});

export const userDataAtom = atom({
  key: 'userData',
  default: null,
});

export const fetchUserDataSelector = selector({
  key: 'fetchUserData',
  get: async ({ get }) => {
    try {
      const response = await axios.get('http://localhost:3000/empmng/admin/bulk');
      return response.data; 
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
});

export const useFetchAndUpdateUserData = () => {
  const [userData, setUserData] = useRecoilState(userDataAtom);

  const fetchDataAndUpdateAtom = async () => {
    try {
      const fetchedUserData = await fetchUserDataSelector();
      setUserData(fetchedUserData);
    } catch (error) {
      console.log(error)
    }
  };

  return fetchDataAndUpdateAtom;
};
