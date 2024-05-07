
import Entries from '../SmallComponent/Employee/Entries'
import axios from 'axios';

function Notadmin() {
  return (
    <div className="flex flex-col  top-16 bg-gray-100 justify-center items-center h-screen p-0 bg-gray-600">
       <img src="/emplog.gif" alt="Sahil GIF" className="cursor-pointer absolute brightness-25 opacity-50  inset-0 z-0 w-full h-full object-cover" />
      <Entries/>
    </div>
  )
}

export default Notadmin
