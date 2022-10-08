import "./datatable.scss";
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function Datatable() {

  const [rowData,setRowData]=useState(userRows);

  const handleDelete=(id)=>{
    setRowData(rowData.filter((item)=>item.id !==id))
  }
    const actionColumn=[
        {
            field:"action",headerName:"Action",width:200,
            renderCell:(params)=>{
                return (
                    <div className="cellAction">
                    <Link to={`/users/${params.row.username}`} style={{textDecoration:"none"}}>
                        <div className="viewButton">
                           View
                        </div>
                    </Link>
                        <div className="deleteButton" onClick={()=>{
                          handleDelete(params.row.id);
                        }}>
                           Delete
                        </div>
                    </div>
                )
            }
        }
    ]
  return (
    <div className="datatable">
    <div className="datatableTitle">
      Add New User
      <Link to="/users/new" style={{textDecoration:"none"}} className="link">
        Add new
      </Link>
    </div>
      <DataGrid
      className="datagrid"
        rows={rowData}
        columns={userColumns.concat(actionColumn)}
        pageSize={6}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />    
    </div>
  )
}

/* 1:55:00 */
