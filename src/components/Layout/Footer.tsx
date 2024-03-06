const Footer = () => {
  const anoAtual = new Date().getFullYear();
  return (
    <footer className="bg-[#f8f9fa] text-primary text-center p-2 border-t text-[#007bff]">
      <div>
        <p>
          &copy; Copyright {anoAtual} Disafio-OxeanBits. Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
