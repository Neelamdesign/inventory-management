import Sidebar from "./sidebar.jsx"
import Header from "./header.jsx"

const DashboardLayout = ({children})=>{
    return (
       <aside className="fullpage">
        <Sidebar/>
        <div className="headerpart">
        <Header/>
          <main>
            {children}
          </main>
        </div>
       </aside>
    )
}

export default DashboardLayout