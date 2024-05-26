
import { HomeTemplate } from "../templates/Home";
import { IncoicesTemplate} from "../templates/Invoices";
import { Route, Routes } from "react-router-dom";
export const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeTemplate />} />
      <Route exact path="/invoices" element={<IncoicesTemplate/>} />
    </Routes>
  );
};
