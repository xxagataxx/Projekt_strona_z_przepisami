import Przepisy from "./podstrony/przepisy/przepisy";
import Layout from "./Layout";
import CoOferujemy from "./podstrony/coOferujemy/coOoferujemy";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<CoOferujemy />} />
          <Route path="przepisy" element={<Przepisy />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

