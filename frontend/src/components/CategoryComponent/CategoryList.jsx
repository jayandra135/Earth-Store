import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCategory, getCategory } from "../../redux/category/Actions";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiFillEdit } from "react-icons/ai";
import { MdOutlineDeleteForever } from "react-icons/md";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import AlertDialog from "../UtilsComponent/AlertDialog";

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

const CategoryList = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.category);
  console.log(data.categories);

  const rows = data.categories;

  useEffect(() => {
    dispatch(getCategory());
  }, []);

  const deleteHandler = (id) => {
    //console.log(id);
    dispatch(deleteCategory(id)).then(() => {
      dispatch(getCategory());
    });
  };

  return (
    <>
      <Container>
        <Row lg={12} md={12} sm={12} xs={12}>
          <Col>
            <h4>Category</h4>
            <TableContainer component={Paper}>
              <Table sx={{ width: "100%" }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell align="center">Sr.No</StyledTableCell>
                    <StyledTableCell align="center">ID</StyledTableCell>
                    <StyledTableCell align="center">Name</StyledTableCell>
                    <StyledTableCell align="center">Image</StyledTableCell>
                    <StyledTableCell align="center">Actions</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.data &&
                    rows.data.map((row, index) => (
                      <StyledTableRow key={row._id}>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {index + 1}
                        </StyledTableCell>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {row._id}
                        </StyledTableCell>
                        <StyledTableCell
                          component="th"
                          scope="row"
                          align="center"
                        >
                          {row.name}
                        </StyledTableCell>

                        <StyledTableCell align="center">
                          {
                            <img
                              src={`${rows.path}/${row.image}`}
                              alt=""
                              className="userProfile"
                            />
                          }
                        </StyledTableCell>

                        <StyledTableCell align="center" className="actionBtns">
                          <Link
                            to={"/editcategory/" + row._id}
                            className="linkHref edit-btn"
                          >
                            <AiFillEdit></AiFillEdit>
                          </Link>

                          <MdOutlineDeleteForever
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

export default CategoryList;
