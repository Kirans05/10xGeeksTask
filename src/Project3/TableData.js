import { TableCell, TableRow } from "@mui/material";
import React from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { removeData } from "./Redux/Action/Action";
import { useDispatch } from "react-redux";

const TableData = ({ item, editHandler, index }) => {
  const dispatch = useDispatch();

  const removeHandler = () => {
    dispatch(removeData(item, index));
  };

  return (
    <TableRow>
      <TableCell align='center'>{item.name}</TableCell>
      <TableCell align='center'>{item.age}</TableCell>
      <TableCell align='center'>{item.city}</TableCell>
      <TableCell align='center'>
        <EditIcon onClick={() => editHandler(item, index)} className="editIcons"/>
      </TableCell>
      <TableCell align='center'>
        <DeleteIcon onClick={() => removeHandler()} className="deleteIcon"/>
      </TableCell>
    </TableRow>
  );
};

export default TableData;
