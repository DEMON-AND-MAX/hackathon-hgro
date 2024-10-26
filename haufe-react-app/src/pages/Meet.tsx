import { useParams } from "react-router-dom";

import Data from "../classes/Data";
import Party from "../classes/Party";
import Task from "../classes/Task";
import User from "../classes/User";

interface Params {
  id: string;
}

function Meet() {
  let data = Data.getInstance();
  const { id } = useParams<{ id: string }>();
  const numericId = Number(id);

  let party = data.getPartyById(numericId);
  //let tasks_len: number = party.tasks.length;

  return (
    <>
      <h1>{party?.name}</h1>
      <br />
      <text>{party?.time.toDateString()}</text>
      <br />
      {party?.tasks[0].name + " - " + party?.tasks[0].desc}
      <br />
      {party?.users.forEach((user) => {
        <>
          <text>{user.name}</text> <br />{" "}
        </>;
      })}
    </>
  );
}

export default Meet;
