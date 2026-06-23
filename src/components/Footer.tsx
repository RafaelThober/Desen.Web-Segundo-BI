import Logo from "../assets/LogoMarca.svg";
import Instagram from "../assets/Instagram.svg";
import Facebook from "../assets/Facebook.svg";
import Youtube from "../assets/Youtube.svg";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="container footer-content">
        <div className="footer-brand">
          <img src={Logo} alt="Logo da Sulco" />

          <div className="social-links">
            <a href="#" aria-label="Instagram">
              <img src={Instagram} alt="" />
            </a>

            <a href="#" aria-label="Facebook">
              <img src={Facebook} alt="" />
            </a>

            <a href="#" aria-label="YouTube">
              <img src={Youtube} alt="" />
            </a>
          </div>
        </div>

        <div className="footer-column">
          <h3>O clube</h3>
          <a href="#">Sobre nós</a>
          <a href="#solution">Como funciona</a>
          <a href="#pricing">Planos</a>
        </div>

        <div className="footer-column">
          <h3>Descubra</h3>
          <a href="#">Catálogo</a>
          <a href="#">Lançamentos</a>
          <a href="#">Edições especiais</a>
        </div>

        <div className="footer-column">
          <h3>Suporte</h3>
          <a href="#contact">Fale conosco</a>
          <a href="#">Dúvidas frequentes</a>
          <a href="#">Entregas</a>
          <a href="#">Termos de uso</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Feito para quem ainda escuta o álbum inteiro. © 2026 Sulco. Todos os
          direitos reservados.
        </p>
      </div>
    </footer>
  );
}
