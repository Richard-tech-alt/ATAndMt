import { Route, Routes } from "react-router-dom";
import InternetScanLayout from "./InternetScanLayout";
import ATTSecurityAlert from "./AtScan";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/scanning" element={<InternetScanLayout/>} />
        <Route path="/" element={<ATTSecurityAlert/>} />
      </Routes>
    </div>
  );
}
export default App;
