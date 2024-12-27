import Message from "./Message";
import Alert from "./components/Alert";
import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import { useState } from "react";
import Quection from "./components/Quection";
import StartPage from "./components/StartPage";

function App() {
  let items = ["option 1", "option 2", "option 3", "option 4", "option 5"];
  let buttonSubmit = "Submit";
  let startQuiz = "Start Quiz";
  const [alertVisible, setAlertVisible] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  const onSubmit = () => {
    console.log("Submitted");
    setAlertVisible(true);
  };
  const handleClick = (item: string) => {
    console.log(item);
  };

  const handleCloseClick = () => {
    console.log("Close button clicked");
    setAlertVisible(false);
  };

  const onStartQuiz = () => {
    console.log("Quiz started");
    setQuizStarted(true);
  };

  return (
    <div>
      <div>
        {!quizStarted && (
          <StartPage
            quizTopic="Deep learning for vision"
            quizAuthor="G.K.M.Ishara Dilshan"
            modifiedDate="2024-12-27"
          >
            <div>
              <p></p>
              <p>
                <h6>Attempt quiz now</h6>
              </p>
              <Button
                buttonType={startQuiz}
                onSubmit={onStartQuiz}
                color="success"
              />
            </div>
          </StartPage>
        )}
      </div>
      <div>
        {quizStarted && (
          <div>
            {
              /* <Alert typeAlert="success" onCloseClick={handleCloseClick}>
        This is a <h3>success</h3> alert
      </Alert> */
              <Quection typeAlert="success">
                This is a <h3>success</h3> quection
              </Quection>
            }

            <ListGroup
              items={items}
              heading="list of options"
              onSelctItem={handleClick}
            />
            <div>
              {alertVisible && (
                <div>
                  <p></p>
                  <Alert typeAlert="success" onCloseClick={handleCloseClick}>
                    Answer and Note by Ishara
                  </Alert>
                </div>
              )}
            </div>
            <div>
              <p></p>
              <p>Click the button to finish and submit</p>
              <Button
                buttonType={buttonSubmit}
                onSubmit={onSubmit}
                color="success"
              />
            </div>
            <Message />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
