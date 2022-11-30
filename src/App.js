import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  // Used in bugs 1 and 2
  const [counter, setCounter] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);
  const [counterThree, setCounterThree] = useState(0);

  // Used in bug 3
  const [name, setName] = useState({
    fname: "Clark",
    lname: "Kent"
  });
  // 1. We want to increase the counter by one on render, why does it increase by more than one?
  // Uncomment this block to see what we mean
  useEffect(() => {
    setCounter(counter + 1);
  }, []);

  // 2. We want to log out the value of counterTwo after we increase it, why doesn't it log the new value?
  // How would you log the new value rather than the old one?
  const setCountValue = () => {
    setCounterTwo(counterTwo + 1);
    console.log("Counter Two Value is ", counterTwo);
  };

  // 3. Here, we have a function to change the "name" state variable, why doesn't it work?
  // 3.1. Bonus: if you click "Change name" then click "Increase Count Two", the name changes magically
  const changeName = () => {
    setName({ fname: name.fname, lname: "Wayne" });
    // name.fname = "Bruce";
    // name.lname = "Wayne";
  };

  return (
    <div className="App">
      <h1>Bug Hunting: React Edition</h1>
      <button onClick={setCountValue}>Increase Count Two</button>
      <button onClick={changeName}>Change Name</button>
      {/* 4. Why does the following code cause an infinite loop ?  (uncomment the code) */}
      {/* <button onClick={setCounter(counter+1)}>Stupid Button</button>  */}
      <h3>Counter One: {counter}</h3>
      <h3>Counter Two: {counterTwo}</h3>
      <h3>Name is : {name.fname + " " + name.lname}</h3>
    </div>
  );
}
