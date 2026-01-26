import { useState } from "react";
import Alert from "./Component/Alert/Alert";
import "./App.css";

function App() {
  const [alertType, setAlertType] = useState(null);

  return (
    <div className="app">
      <div className="button-group">
        <button
          className="btn btn-success"
          onClick={() => setAlertType("success")}
        >
          Success
        </button>

        <button
          className="btn btn-warning"
          onClick={() => setAlertType("warning")}
        >
          Warning
        </button>

        <button
          className="btn btn-error"
          onClick={() => setAlertType("error")}
        >
          Error
        </button>
      </div>

      <Alert
        type={alertType}
        message={`This is ${alertType} message`}
        onClose={() => setAlertType(null)}
      />
    </div>
  );
}

export default App;
