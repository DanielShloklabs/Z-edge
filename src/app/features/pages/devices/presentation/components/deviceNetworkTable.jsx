import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import React, { useState } from "react";
import "../../../../../common/styles/alarmTableStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";
import { Checkbox } from "@mui/material";
import CustomButton from "../../../../reusableComponents/customButton";

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "type", label: "Type", minWidth: 170 },
  { id: "status", label: "Status", minWidth: 170 },
  { id: "lastPollTime", label: "Last Poll Time", minWidth: 170 },
  { id: "enable", label: "Enable", minWidth: 170 },
  { id: "devices", label: "Devices", minWidth: 170 },
];

export default function DeviceNetworkTable({ networkProperties }) {
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const rows = createData();

  function createData() {
    const data = [];
    const storedData = JSON.parse(localStorage.getItem("deviceNetwork")) || [];
    storedData.forEach((item, index) => {
      data.push({
        name: item.name,
        type: item.type,
        status: item.status,
        lastPollTime: item.lastPollTime,
        enable: item.enable,
        devices: item.name,
      });
    });
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
    <Paper className={`deviceNetworkTable ${isDarkMode ? "dark" : ""}`}>
      <TableContainer
        className="deviceNetworkTableContainer"
        style={{ maxHeight: 440 }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={`deviceNetworkTableHeader ${
                    isDarkMode ? "dark" : ""
                  }`}
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
              .map((row, index) => (
                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                  {columns.map((column) => (
                    <TableCell
                      className={`deviceNetworkTableData ${
                        isDarkMode ? "dark" : ""
                      }`}
                      key={column.id}
                      align={column.align}
                    >
                      {column.id === "enable" ? (
                        <Checkbox
                          checked={row.enable}
                          onChange={(event) => {
                            console.log(
                              "Checkbox checked:",
                              event.target.checked
                            );
                          }}
                        />
                      ) : column.id === "devices" ? (
                        <CustomButton
                          className={`deviceNetworkDevicesBtn ${
                            isDarkMode ? "dark" : ""
                          }`}
                          buttonName="Details"
                          handleClick={() => {
                            networkProperties(row);
                          }}
                        />
                      ) : (
                        row[column.id]
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        className={`deviceNetworkTablePagination ${isDarkMode ? "dark" : ""}`}
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
