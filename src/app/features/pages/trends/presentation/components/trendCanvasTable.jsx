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
  { id: "timestamp", label: "Timestamp", minWidth: 170 },
  { id: "trendFlags", label: "Trend Flags", minWidth: 170 },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
  {
    id: "value",
    label: "Value(°C)",
    minWidth: 170,
  },
];

export default function TrendCanvasTable({
  timestamp,
  trendFlags,
  status,
  value,
}) {
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  if (!timestamp || !trendFlags || !status || !value) {
    return null;
  }

  if (
    timestamp.length !== trendFlags.length ||
    timestamp.length !== status.length ||
    timestamp.length !== value.length
  ) {
    return null;
  }
  const rows = createData(timestamp, trendFlags, status, value);

  function createData(timestamp, trendFlags, status, value) {
    const data = [];
    for (let i = 0; i < timestamp.length; i++) {
      data.push({
        timestamp: timestamp[i],
        trendFlags: trendFlags[i],
        status: status[i],
        value: value[i],
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
