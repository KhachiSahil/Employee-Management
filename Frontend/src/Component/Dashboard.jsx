import MainContent from "../SmallComponent/Dashboard/MainComponent"
import Sidebar from "../SmallComponent/Dashboard/Sidebar"
import Navbar from "./Navbar"


function Dashboard() {
  return (
    <div>
     <Navbar/>
     <Sidebar/>
     <MainContent/>
    </div>
  )
}

export default Dashboard