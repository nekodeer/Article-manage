import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Breadcrumb from "./components/Breadcrumb";
import Pagination from "./components/Pagination";
function App() {

  return (
    <div className="container-fluid app">
      <div className="row header align-items-start">
        <div className="col-2"><h2>Some Logo</h2></div>
        <div className="col-2"><Header /></div>
      </div>
      <div className="row content">
        <div className="col-1 sidebar">
          <Sidebar />
        </div>
        <div className="col-11 bg-light d-flex flex-column ">
          <div className="bd-highlight">
            <Breadcrumb />
            <Pagination/>
          </div>
          <div className="container-fluid bg-body" style={{'flex':'1'}}>
            <Outlet />
          </div>
        </div>
      </div>
      <div className="row bg-dark text-light footer align-items-end">
        Footer Copyright @ 2022 Lester Li</div>
    </div>
  );
}

export default App;
