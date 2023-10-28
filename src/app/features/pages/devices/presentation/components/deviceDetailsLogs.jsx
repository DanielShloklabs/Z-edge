import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import "../../../../../common/styles/alarmTableStyle.css";
import { useTheme } from "../../../../../common/theme/themeContext";

const columns = [
  { id: "dateTime", label: "Date Time", minWidth: 170 },
  {
    id: "eventType",
    label: "Event Type",
    minWidth: 170,
  },
  {
    id: "event",
    label: "Event",
    minWidth: 170,
  },
  {
    id: "eventDescription",
    label: "Event Description",
    minWidth: 170,
  },
  {
    id: "priorityState",
    label: "Priority State",
    minWidth: 170,
  },
];

export default function DeviceDetailsLogs({
  dateTime,
  eventType,
  event,
  eventDescription,
  priorityState,
}) {
  const { isDarkMode } = useTheme();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  //   if (!priority || !dateTime || !source || !sourceState || !ackStatus || !eventDescription || !message) {
  //       return null;
  //     }

  //     if (
  //       priority.length !== dateTime.length ||
  //       priority.length !== source.length ||
  //       priority.length !== sourceState.length ||
  //       priority.length !== ackStatus.length ||
  //       priority.length !== eventDescription.length ||
  //       priority.length !== message.length
  //     ) {
  //       return null;
  //     }

  const rows = createData(
    dateTime,
    eventType,
    event,
    eventDescription,
    priorityState
  );

  function createData(
    dateTime,
    eventType,
    event,
    eventDescription,
    priorityState
  ) {
    const data = [];
    for (let i = 0; i < dateTime?.length; i++) {
      data.push({
        dateTime: dateTime[i],
        eventType: eventType[i],
        event: event[i],
        eventDescription: eventDescription[i],
        priorityState: priorityState[i],
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
    <Paper className={`alarmTable ${isDarkMode ? "dark" : ""}`}>
      <TableContainer
        className="alarmTableContainer"
        style={{ maxHeight: 440 }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={`alarmTableHeader ${isDarkMode ? "dark" : ""}`}
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
                          className={`alarmTableData ${
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
        className={`alarmTablePagination ${isDarkMode ? "dark" : ""}`}
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
