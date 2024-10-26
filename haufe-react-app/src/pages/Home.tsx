import Party from "../classes/Party";
import User from "../classes/User";
import Task from "../classes/Task";
import Data from "../classes/Data";

import ListGroup from "../components/ListGroup";

import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleSelectedItem = (id: number) => {
    navigate(`/meet/${id}`);
  };

  let data = Data.getInstance();

  return (
    <>
      <h1>Party poppers</h1>
      <text>Organize parties, hangouts and more within your browser!</text>
      <ListGroup
        parties={data.parties}
        heading="Parties!"
        onSelectItem={handleSelectedItem}
      />
    </>
  );
}

export default Home;
