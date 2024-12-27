import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

const handleClick = (item: string) => {
  console.log(item);
};

const onSubmit = () => {
  console.log("Submitted");
};

const handleCloseClick = () => {
  console.log("Close button clicked");
};

function App() {
  let items = ["option 1", "option 2", "option 3", "option 4", "option 5"];
  let buttonSubmit = "Submit";

  return (
    <div>
      <Alert typeAlert="success" onCloseClick={handleCloseClick}>
        This is a <h3>success</h3> alert
      </Alert>

      <ListGroup
        items={items}
        heading="list of options"
        onSelctItem={handleClick}
      />
      <div>
        <p></p>
        <Alert typeAlert="success" onCloseClick={handleCloseClick}>
          ishara
        </Alert>
      </div>
      <div>
        <p>Click the button to finish and submit.</p>
        <Button buttonType={buttonSubmit} onSubmit={onSubmit} color="success" />
      </div>
      <Message />
    </div>
  );
}

export default App;
