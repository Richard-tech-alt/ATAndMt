import { Route, Routes } from "react-router-dom";
import ATTSecurityAlert from "./AtScan";
import InternetScanLayout from "./InternetScanLayout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ATTSecurityAlert/>} />
          <Route path="/scanning" element={<InternetScanLayout/>} />
      </Routes>
    </div>
  );
}
export default App;
