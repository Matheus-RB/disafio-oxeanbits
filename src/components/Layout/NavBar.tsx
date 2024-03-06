import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-[#f8f9fa] flex flex-col items-center justify-center p-6 border-b ">
      <nav className="w-full">
        <ul className="flex items-center justify-end gap-6 font-medium text-lg text-[#007bff]">
          <li className="hover:hover:text-[#5996d8]">
            <Link to="/">Populares</Link>
          </li>
          <li className="hover:text-[#5996d8]">
            <Link to="tabela-de-filmes">Tabela de Filmes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
