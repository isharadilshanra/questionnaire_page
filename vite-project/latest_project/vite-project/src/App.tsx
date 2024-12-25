import Message from "./Message";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["option 1", "option 2", "option 3", "option 4", "option 5"];

  return (
    <div>
      <ListGroup items={items} heading="list of options" />
      <Message />
    </div>
  );
}

export default App;
