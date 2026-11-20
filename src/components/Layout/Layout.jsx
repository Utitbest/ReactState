import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import { ToastContainer } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Layout = () => {
  return (
    <>
        <Header />
        <main style={{display:'flex', flex:1, backgroundColor: 'green', overflow: 'hidden'}}>
            <Outlet /> {/* the current page appears here */}
        </main>
        <footer>
            Hello welcome to Utitbest best forter Element
        </footer>
      <ToastContainer position="bottom-right" />
    </>
  )
}

export default Layout