import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./Presentation/Main/main";
import { DialogBody } from "./Presentation/dialog/dialog_body/dialog_body";

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />}>
          <Route path="reddy" element={<DialogBody />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRouter;
