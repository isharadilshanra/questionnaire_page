import Message from "./Message";
import ListGroup from "./components/ListGroup";

const handleClick = (item: string) => {
  console.log(item);
};

function App() {
  let items = ["option 1", "option 2", "option 3", "option 4", "option 5"];

  return (
    <div>
      <ListGroup
        items={items}
        heading="list of options"
        onSelctItem={handleClick}
      />
      <Message />
    </div>
  );
}

export default App;
