import React from "react";
import "./Project2.css"


const TableData = ({ item, reRenderComponent, EditHandler, index}) => {

    const deleteHandler = () => {
        let userDataArray = JSON.parse(localStorage.getItem(`${localStorage.getItem("userName")}-userTodo`)) 
        let filteredItems = userDataArray.filter(list => list.id != item.id)
        localStorage.setItem(`${localStorage.getItem("userName")}-userTodo`, JSON.stringify(filteredItems))
        reRenderComponent()
    }

  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.age}</td>
      <td>{item.city}</td>
      <td>
        <button onClick={() => EditHandler(item, index)} className="editButton">Edit</button>
      </td>
      <td>
        <button onClick={deleteHandler} className="deleteButton">Delete</button>
      </td>
    </tr>
  );
};

export default TableData;
