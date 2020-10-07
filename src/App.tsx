import React, { useState } from "react";
import "./styles.css";
import AnotherComponent from "./AnotherComponent";

export const AppContext = React.createContext<number>(1);

export default function App() {
  const [val, setVal] = useState(1);
  const changeVal = () => {
    setVal(val + 1);
  };
  const { Provider } = AppContext;
  return (
    <div className="App">
      <p>
        The application will demonstrate context value getting updated in
        consumer in sync with the provider
      </p>
      <button onClick={changeVal}>Increment</button>
      <p>in App component(Provider): {val}</p>
      <Provider value={val}>
        <AnotherComponent />
      </Provider>
    </div>
  );
}
