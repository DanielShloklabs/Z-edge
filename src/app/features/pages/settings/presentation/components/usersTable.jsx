import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../../../../../common/styles/usersTableStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";

const columns = [
  { id: "userName", label: "User Name", minWidth: 170 },
  { id: "roles", label: "Roles", minWidth: 170 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
  {
    id: "lastAccess",
    label: "Last Access Time",
    minWidth: 170,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 170,
  },
];

// function createData(userName, roles, status, lastAccess, action) {
//   return { userName, roles, status, lastAccess, action };
// }

export default function UsersTable({ userNames, roles, status, lastAccess }) {
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (!userNames || !roles || !status || !lastAccess) {
    return null;
  }

  if (
    userNames.length !== roles.length ||
    userNames.length !== status.length ||
    userNames.length !== lastAccess.length
  ) {
    return null;
  }
  const rows = createData(userNames, roles, status, lastAccess);

  function createData(userNames, roles, status, lastAccess) {
    const data = [];
    for (let i = 0; i < userNames.length; i++) {
      data.push({
        userName: userNames[i],
        roles: roles[i],
        status: status[i],
        lastAccess: lastAccess[i],
        action: "Edit / Delete",
      });
    }
    return data;
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={`usersTable ${isDarkMode ? "dark" : ""}`}>
      <TableContainer
        className="usersTableContainer"
        style={{ maxHeight: 440 }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={`usersTableHeader ${isDarkMode ? "dark" : ""}`}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell
                          className={`usersTableData ${
                            isDarkMode ? "dark" : ""
                          }`}
                          key={column.id}
                          align={column.align}
                        >
                          {typeof value === "number"
                            ? value.toLocaleString("en-US")
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={`usersTablePagination ${isDarkMode ? "dark" : ""}`}
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
