import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

const handleClick = (item: string) => {
  console.log(item);
};

function App() {
  let items = ["option 1", "option 2", "option 3", "option 4", "option 5"];

  return (
    <div>
      <Alert>
        This is a <h3>success</h3> alert
      </Alert>

      <ListGroup
        items={items}
        heading="list of options"
        onSelctItem={handleClick}
      />
      <div>
        <p></p>
        <p>Click the button to finish and submit.</p>
        <Button />
      </div>
      <Message />
    </div>
  );
}

export default App;
