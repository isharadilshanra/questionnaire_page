// import { Fragment } from "react";
import Message from "../Message";

function ListGroup() {
  let items = ["option 1", "option 2", "option 3", "option 4", "option 5"];
  //items = [];
  //const messge = items.length === 0 ? <h3> No items found</h3> : null;

  const getMessge = () => {
    return items.length === 0 ? <h3> No items found</h3> : null;
  };

  return (
    <>
      <h1>List Group</h1>
      {getMessge()}
      {items.length === 0 && <h3>The list is empty</h3>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li key={index} className="list-group-item">
            {index + 1}. {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
