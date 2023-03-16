import { SubmitPage, ThankYouPage } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SubmitPage />}></Route>
        <Route path="thank-you" element={<ThankYouPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
