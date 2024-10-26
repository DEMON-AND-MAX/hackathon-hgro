import Party from "../classes/Party";
import { useState } from "react";

interface Props {
  parties: Party[];
  heading: string;
  onSelectItem: (id: number) => void;
}

function ListGroup({ parties, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  const getMessage = () => {
    return parties.length === 0 ? <p>No parties found!</p> : null;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {parties.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item.name}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item.id);
            }}
          >
            {item.name}
            <br />
            {item.time.toDateString()}
            <br />
            {item.tasks[0].name}
            <br />
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
