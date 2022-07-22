import React, { useEffect, useState } from "react";
import { downloadUsers, getUsers } from "../../../api/admin-user-service";
import DataTable from "react-data-table-component";
import { Button, ButtonGroup, Spinner } from "react-bootstrap";
import fileDownload from "js-file-download";
import { Link, useNavigate } from "react-router-dom";

const AdminUsers = () => {
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [loadingDownload, setLoadingDownload] = useState(false);
  const navigate = useNavigate();

  const loadData = async () => {
    try {
      const resp = await getUsers();
      setUsers(resp.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const columns = [
    {
      name: "First Name",
      selector: (row) => row.firstName,
      sortable: true,
    },
    {
      name: "Last Name",
      selector: (row) => row.lastName,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Roles",
      selector: (row) => row.roles,
      sortable: true,
    },
  ];

  const customStyles = {
    rows: {
      style: {
        minHeight: "72px", // override the row height
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        backgroundColor: "gray",
        color: "white",
      },
    },
    cells: {
      style: {
        paddingLeft: "8px", // override the cell padding for data cells
        paddingRight: "8px",
      },
    },
  };

  const handleDownload = async () => {
    try {
      setLoadingDownload(true);
      const resp = await downloadUsers();
      fileDownload(resp.data, "users.xlsx");
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingDownload(false);
    }
  };

  const handleEdit = (row) => {
    navigate(`/admin/users/${row.id}`);
  };

  return (
    <div>
      <ButtonGroup aria-label="Basic example">
        <Button variant="primary" as={Link} to="/admin/users/new">New User</Button>
        <Button
          variant="secondary"
          onClick={handleDownload}
          disabled={loadingDownload}
        >
          {loadingDownload && <Spinner animation="border" size="sm" />}
          Download List
        </Button>
      </ButtonGroup>

      <DataTable
        title="Users"
        columns={columns}
        data={users}
        pagination
        customStyles={customStyles}
        progressPending={loadingUsers}
        onRowClicked={handleEdit}
      />
    </div>
  );
};

export default AdminUsers;
