import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUser } from "../../redux/users/Actions";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const UserList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.user);
  console.log(data.users.data);
  // const rows = data.users;
  const rows = data.users;

  useEffect(() => {
    dispatch(getUser());
  }, []);

  const deleteHandler = (id) => {
    //console.log(id);
    dispatch(deleteUser(id)).then(() => {
      dispatch(getUser());
    });
  };

  return (
    <>
      <Container>
        <Row lg={12} md={12} sm={12} xs={12}>
          <Col>
            <h4>Users</h4>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Sr.No</StyledTableCell>

                    <StyledTableCell align="center">FirstName</StyledTableCell>
                    <StyledTableCell align="center">LastName</StyledTableCell>
                    <StyledTableCell align="center">Email</StyledTableCell>
                    <StyledTableCell align="center">Contact</StyledTableCell>
                    <StyledTableCell align="center">DOB</StyledTableCell>
                    <StyledTableCell align="center">Gender</StyledTableCell>
                    <StyledTableCell align="center">Avatar</StyledTableCell>
                    <StyledTableCell align="center">Status</StyledTableCell>
                    <StyledTableCell align="center">OTP</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.data &&
                    rows.data.map((row, index) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell component="th" scope="row">
                          {index + 1}
                        </StyledTableCell>

                        <StyledTableCell component="th" scope="row">
                          {row.firstName}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.lastName}
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          {row.email}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.contact}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.dob}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.gender}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {
                            <img
                              src={`${rows.path}/${row.avatar}`}
                              alt=""
                              className="userProfile"
                            />
                          }
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.status}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          {row.otp}
                        </StyledTableCell>
                        <StyledTableCell align="center" className="actionBtns">
                          <Link
                            to={"/edituser/" + row._id}
                            className="linkHref edit-btn"
                          >
                            <AiFillEdit />
                          </Link>

                          <AiFillDelete
                            className="delete-btn"
                            onClick={() => deleteHandler(row._id)}
                          />
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserList;
