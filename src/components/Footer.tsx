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
          <img src={Logo} alt="Logo da empresa" />

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
          <h3>Empresa</h3>
          <a href="#">Sobre nós</a>
          <a href="#">Faça parte do time</a>
          <a href="#">Blog</a>
        </div>

        <div className="footer-column">
          <h3>Funcionalidades</h3>
          <a href="#">Marketing</a>
          <a href="#">Análise de dados</a>
          <a href="#">Boot discord</a>
        </div>

        <div className="footer-column">
          <h3>Recursos</h3>
          <a href="#">IOS & Android</a>
          <a href="#">Teste a Demo</a>
          <a href="#">Clientes</a>
          <a href="#">API</a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          Feito com amor na aula de Programação Web 💙 ©2026 - Todos os direitos
          reservados.
        </p>
      </div>
    </footer>
  );
}
