import ReactDOM from "react-dom/client";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import List from "./pages/list/list";
import Single from "./pages/single/single";
import New from "./pages/new/new";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/users">
          <Route index element={<List />} />
          <Route path=":userId" element={<Single />} />
          <Route path="new" element={<New />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);
