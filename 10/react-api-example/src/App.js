import "./App.css";
import AxiosDeleteExample from "./components/AxiosDeleteExample";
import AxiosGetExample from "./components/AxiosGetExample";
import AxiosPostExample from "./components/AxiosPostExample";
import AxiosPutExample from "./components/AxiosPutExample";
import FetchDeleteExample from "./components/FetchDeleteExample";
import FetchGetExample from "./components/FetchGetExample";
import FetchPostExample from "./components/FetchPostExample";
import FetchPutExample from "./components/FetchPutExample";

function App() {
  return (
    <div>
      {/* <FetchGetExample></FetchGetExample>
      <FetchPostExample></FetchPostExample>
      <FetchPutExample></FetchPutExample>
      <FetchDeleteExample></FetchDeleteExample> */}

      <AxiosGetExample></AxiosGetExample>
      <AxiosPostExample></AxiosPostExample>
      <AxiosPutExample></AxiosPutExample>
      <AxiosDeleteExample></AxiosDeleteExample>
    </div>
  );
}

export default App;
