import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import "./request.css";
import React, { useState } from "react";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

//popover

const columns = [{ id: "name", label: "Name", minWidth: 170 }];

function createData(name) {
  return { name };
}

const rows = [
  createData("Betselot Andargachew", "IN", 1324171354, 3287263),
  createData("Rediet Wogayeh", "CN", 1403500365, 9596961),
  createData("Tsion Yasin", "IT", 60483973, 301340),
  createData("Elshaday Getachew", "US", 327167434, 9833520),
  createData("Teddy Afron", "CA", 37602103, 9984670),
  createData("Kim Namjoon", "AU", 25475400, 7692024),
  createData("Kris Jenner", "DE", 83019200, 357578),
  createData("BTS", "IE", 4857000, 70273),
  createData("Kim Tae Hyung", "MX", 126577691, 1972550),
  createData("Khloe Kardashian", "JP", 126317000, 377973),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
  heading: {},
});

export default function Request() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper id="head" className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
              <TableCell>Documents </TableCell>
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
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <TableCell>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleClick}
                      >
                        Open
                      </Button>
                      <Popover
                        id="popover"
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: "center",
                          horizontal: "center",
                        }}
                        transformOrigin={{
                          vertical: "top",
                          horizontal: "center",
                        }}
                      >
                        <Typography
                          id="pop"
                          className={classes.typography}
                        ></Typography>
                        <div id="acc" className={classes.root}>
                          <Accordion id="accordion">
                            <AccordionSummary
                              expandIcon={<ExpandMoreIcon />}
                              aria-controls="panel1a-content"
                              id="panel1a-header"
                            >
                              <Typography id="typo" className={classes.heading}>
                                Emergency Alerting System
                              </Typography>
                            </AccordionSummary>
                            <AccordionDetails id="detail">
                              <Typography>
                                emergency management software gives you the power to launch a tailored, 
                                detailed plan whenever an event starts in your city or region.
                                , use the built-in flexibility to change those plans on the fly as conditions change or totally unpredictable circumstances arise.
                              </Typography>
                            </AccordionDetails>
                          </Accordion>
                          <div id="popbutton" className={classes.root}>
                            <Button variant="contained" color="primary">
                              Accept
                            </Button>
                            <Button
                              variant="contained"
                              color="secondary"
                              onClick={() => {
                                alert("yay");
                              }}
                            >
                              Decline
                            </Button>
                          </div>
                        </div>
                      </Popover>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
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
