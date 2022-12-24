import "./layout.css";
import Form from "../form/Form";
import Table from "../table/Table";
import { useState } from "react";

function Layout() {

  return (
    <div className="layoutContainer">
      <div className="layoutWrapper">
        <div className="layoutDetails">
          <div className="layoutForm">
            <Form />
          </div>
          <div className="layoutTable">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
