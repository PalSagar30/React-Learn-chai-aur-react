import Card from "./components/Card";

import "./App.css";

function App() {


  return (
    <>
      <h1 className="text-3xl font-bold underline mb-4">Hello world!</h1>
      <Card username={"saga"} btnText="click me"/>
      <Card />
    </>
  );
}

export default App;
