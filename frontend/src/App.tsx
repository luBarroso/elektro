import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { CongSignup } from "./pages/CongSignup";
import { Product } from "./pages/Product";
import { Search } from "./pages/Search";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pesquisa/:search" element={<Search />} />
          <Route path="/pesquisa/" element={<Search />} />
          <Route path="/perfil" element={<Profile />} />
          <Route path="/cadastro" element={<Signup />} />
          <Route path="/entar" element={<Signin />} />
          <Route path="/cadastro/concluido" element={<CongSignup />} />
          <Route path="/produto/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
