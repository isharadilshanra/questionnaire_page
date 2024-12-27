function Message() {
  const name = "Ishara Dilshan";

  if (name)
    return (
      <div>
        <p></p>
        <h5>Created by: {name}</h5>
        <p>Last modified: 2024/12</p>
      </div>
    );
  return (
    <div>
      <p></p>
      <h5>Created by: {name}</h5>
    </div>
  );
}
export default Message;
