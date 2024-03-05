import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-[#f8f9fa] flex flex-col items-center justify-center p-4 border-b ">
      <div className="w-10/12">
        <nav>
          <ul className="flex items-center justify-around font-medium text-[#007bff]">
            <li>
              <Link to="/">Populares</Link>
            </li>
            <li>
              <Link to="tabela-de-filmes">Tabela de Filmes</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
