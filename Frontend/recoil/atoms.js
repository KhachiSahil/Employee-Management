import { atom,selector,useRecoilState, useRecoilValue  } from 'recoil';
import axios from 'axios';
import { recoilPersist } from 'recoil-persist'
const { persistAtom } = recoilPersist()

export const isClient = atom({
  key: 'isClient',
  default: 'sahil',
  effects_UNSTABLE: [persistAtom],
});

export const userDataAtom = atom({
  key: 'userData',
  default: [{}],
  effects_UNSTABLE: [persistAtom],
});

export const employeeSide = atom({
  key:'employeeSide',
  default:10,
  effects_UNSTABLE:[persistAtom],
});
