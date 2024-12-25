function Message() {
    const name = "ishara";
  
  if (name)
    return <div><h1>Hello, World!</h1><h2>Created by: {name}</h2><p>Last modified: 2024/12</p></div>;
  return <div><h1>Hello, World!</h1><h2>Created by: {name}</h2></div>;
}
export default Message;