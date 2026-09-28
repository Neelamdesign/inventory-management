import { Link } from "react-router-dom";
import DashboardLayout from "../component/layout";
import Statictics from "../component/statistics";
import Table from "../component/table";
import {FaPlus} from "react-icons/fa"
import { useState } from "react";
const Dashboard = () => {


  return (
    <DashboardLayout>
        <div className="heading">
          <div className="title">
            <h4>Inventory</h4>
            <p>Manage your stock items, keep track on your quantity,price etc...</p>
        </div>
         <Link to="/add" className="btn"><FaPlus/> Add Items</Link>
        </div>
       
      <Statictics />
      <Table />
    </DashboardLayout>
  );
};

export default Dashboard;
