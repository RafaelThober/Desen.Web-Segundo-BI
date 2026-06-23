import { useEffect, useState } from "react";
import Close from "../assets/Close.svg";
import Menu from "../assets/Hamburguer.svg";
import Button from "../components/Button";
import Logo from "../assets/LogoMarca.svg";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import Champion from "../assets/Champion.svg";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import Check from "../assets/Check.svg";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import "../styles/pricing.css";
import "../styles/testimonials.css";
import "../styles/solution.css";
import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img
            src={Logo}
            alt="Logo da Sulco"
            width={220}
            height={80}
          />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Início</a>
              </li>

              <li>
                <a href="#solution">Como funciona</a>
              </li>

              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>

              <li>
                <a href="#pricing">Planos</a>
              </li>

              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="#">
                Entrar
              </a>

              <Button text="Assine agora" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#" onClick={() => setShowMobileMenu(false)}>
                        Início
                      </a>
                    </li>

                    <li>
                      <a
                        href="#solution"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Como funciona
                      </a>
                    </li>

                    <li>
                      <a
                        href="#testimonials"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Depoimentos
                      </a>
                    </li>

                    <li>
                      <a
                        href="#pricing"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Planos
                      </a>
                    </li>

                    <li>
                      <a
                        href="#contact"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Contato
                      </a>
                    </li>

                    <li>
                      <a
                        className="reverse-color"
                        href="#"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Entrar
                      </a>
                    </li>
                  </ul>

                  <span
                    className="btn-wrapper"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    <img
                      src={Close}
                      alt="Ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                className="btn-wrapper"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <img
                  src={Menu}
                  alt="Ícone menu"
                  width={24}
                  height={24}
                />
              </span>
            )}
          </div>
        </nav>
      </header>

      <main>
        <section id="hero">
          <span className="desktop-only">
            <img
              src={HeroRectangleTwo}
              alt="Elemento decorativo da seção inicial"
            />
          </span>

          <img
            src={HeroRectangleOne}
            alt="Elemento decorativo da seção inicial"
          />

          <div className="container content">
            <p className="desktop-only">CLUBE DE VINIL</p>

            <h1>
              Um novo disco na sua porta. Todo mês.
            </h1>

            <p>
              Descubra artistas, redescubra clássicos e aumente sua coleção
              com vinis escolhidos especialmente para o seu gosto musical.
            </p>

            <div className="flex gap-1">
              <span>
                <Button text="Quero assinar" />
              </span>

              <span className="desktop-only">
                <Button text="Conheça o clube" secondary />
              </span>
            </div>
          </div>
        </section>

        <section className="container" id="solution">
          <header>
            <span>
              <h2>Como funciona</h2>
              <h2 className="solution-title">
                Curadoria para quem ouve de verdade
              </h2>
            </span>

            <p>
              A <strong>Sulco</strong> encontra discos que combinam com você
              e transforma cada entrega em uma nova experiência musical.
            </p>
          </header>

          <section className="even-columns">
            <Card
              icon={Champion}
              title="Curadoria pessoal"
              description="Conte para a gente o que você ouve e receba discos selecionados de acordo com seus artistas, gêneros e descobertas favoritas."
            />

            <Card
              icon={Champion}
              title="Edições especiais"
              description="Tenha acesso antecipado a lançamentos, reedições, prensagens coloridas e títulos selecionados para colecionadores."
            />

            <Card
              icon={Champion}
              title="Entrega protegida"
              description="Cada vinil é embalado com cuidado para chegar intacto, pronto para sair da caixa e tocar na sua vitrola."
            />
          </section>
        </section>

        <section id="testimonials">
          <header>
            <span>
              <p className="desktop-only">
                De quem já colocou a agulha no disco
              </p>

              <h2>Quem assina, escuta diferente.</h2>
            </span>

            <p>
              Nossa comunidade reúne ouvintes curiosos, apaixonados por música
              e colecionadores sempre procurando o próximo grande disco.
            </p>
          </header>

          <section className="carousel">
            <div className="carousel-content">
              <TestimonialCard
                testimony="A curadoria realmente entendeu meu gosto. Recebi um disco que eu nunca teria procurado sozinho e ele já virou um dos favoritos da coleção."
                rating={5}
                name="Lucas Martins"
                role="Assinante Clube LP"
              />

              <TestimonialCard
                testimony="Os discos chegam muito bem protegidos e a seleção sempre surpreende. É como receber uma recomendação feita por alguém que conhece minha coleção."
                rating={5}
                name="Marina Costa"
                role="Colecionadora"
              />
            </div>

            <div className="carousel-content" aria-hidden="true">
              <TestimonialCard
                testimony="A curadoria realmente entendeu meu gosto. Recebi um disco que eu nunca teria procurado sozinho e ele já virou um dos favoritos da coleção."
                rating={5}
                name="Lucas Martins"
                role="Assinante Clube LP"
              />

              <TestimonialCard
                testimony="Os discos chegam muito bem protegidos e a seleção sempre surpreende. É como receber uma recomendação feita por alguém que conhece minha coleção."
                rating={5}
                name="Marina Costa"
                role="Colecionadora"
              />
            </div>
          </section>
        </section>

        <section id="pricing" className="container">
          <header>
            <p className="desktop-only">Escolha seu lado</p>
            <h2>Planos do clube</h2>
          </header>

          <section className="even-columns gap-1.5">
            <div className="pricing-card">
              <span className="plan">
                <h3>Ouvinte</h3>
                <p>
                  Para conhecer o catálogo e começar sua coleção no seu ritmo.
                </p>
              </span>

              <h2>Grátis</h2>

              <Button text="Começar agora" secondary />

              <span className="hr" />

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Acesso ao catálogo</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Lista de desejos</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Compra avulsa de vinis</p>
              </span>
            </div>

            <div className="pricing-card premium">
              <span className="bonus">
                <p>PLANO MAIS ESCOLHIDO</p>
              </span>

              <span className="plan">
                <h3>Clube LP</h3>
                <p>
                  Uma nova descoberta escolhida para você todos os meses.
                </p>
              </span>

              <span className="price">
                <h2>R$ 89,90</h2>
                <p>/mês</p>
              </span>

              <Button text="Assinar Clube LP" />

              <span className="hr" />

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>1 vinil por mês</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Curadoria personalizada</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Desconto em compras avulsas</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Acesso antecipado a lançamentos</p>
              </span>
            </div>

            <div className="pricing-card">
              <span className="plan">
                <h3>Colecionador</h3>
                <p>
                  Para quem procura raridades, edições especiais e mais música.
                </p>
              </span>

              <span className="price">
                <h2>R$ 149,90</h2>
                <p>/mês</p>
              </span>

              <Button text="Quero colecionar" secondary />

              <span className="hr" />

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>2 vinis por mês</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Edições especiais e coloridas</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Frete grátis</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Prioridade em discos raros</p>
              </span>
            </div>
          </section>
        </section>

        <Contact />
      </main>

      <Footer />
    </>
  );
}
