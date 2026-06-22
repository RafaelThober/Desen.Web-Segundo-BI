import { useEffect, useState } from "react";
import Close from "../assets/Close.svg";
import Menu from "../assets/Hamburguer.svg";
import Button from "../components/Button";
import Logo from "../assets/LogoMarca.svg";
import HeroRectangleOne from "../assets/images/RectangleOne.png";
import HeroRectangleTwo from "../assets/images/RectangleTwo.png";
import Champion from "../assets/Champion.svg";
import Card from "../components/Card";
import ProfileImageOne from "../assets/images/Elon.png";
import ProfileImageTwo from "../assets/images/Ryan.png";
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
            alt="Logo da empresa"
            width={220}
            height={80}
          />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>

              <li>
                <a href="#solution">Soluções</a>
              </li>

              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>

              <li>
                <a href="#pricing">Preços</a>
              </li>

              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>
          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>

              <Button text="Cadastre-se" />
            </div>
          </div>
          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a href="#" onClick={() => setShowMobileMenu(false)}>
                        Home
                      </a>
                    </li>

                    <li>
                      <a href="#solution" onClick={() => setShowMobileMenu(false)}>
                        Soluções
                      </a>
                    </li>

                    <li>
                      <a href="#testimonials" onClick={() => setShowMobileMenu(false)}>
                        Depoimentos
                      </a>
                    </li>

                    <li>
                      <a href="#pricing" onClick={() => setShowMobileMenu(false)}>
                        Preços
                      </a>
                    </li>

                    <li>
                      <a href="#contact" onClick={() => setShowMobileMenu(false)}>
                        Contato
                      </a>
                    </li>

                    <li>
                      <a
                        className="reverse-color"
                        href="#"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Login
                      </a>
                    </li>
                  </ul>

                  <span
                    className="btn-wrapper"
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                  >
                    <img src={Close} alt="Ícone fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span
                className="btn-wrapper"
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              >
                <img src={Menu} alt="Ícone menu" width={24} height={24} />
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
              alt="Retângulo decorativo da tela inicial"
            />
          </span>

          <img
            src={HeroRectangleOne}
            alt="Retângulo decorativo da tela inicial"
          />

          <div className="container content">
            <p className="desktop-only">Olá</p>

            <h1>
              Comida de mãe direto no seu apê, é só pedir que entregamos para você!
            </h1>

            <p>
              Já pensou em matar a saudade daquela comida caseira? O melhor de tudo,
              nossas receitas são 100% saudáveis, bora entrar no shape.
            </p>

            <div className="flex gap-1">
              <span>
                <Button text="Cadastre-se" />
              </span>

              <span className="desktop-only">
                <Button text="Veja mais" secondary />
              </span>
            </div>
          </div>
        </section>

        <section className="container" id="solution">
          <header>
            <span>
              <h2>Soluções</h2>

              <span className="desktop-only">
                <h2>Sob medida para você</h2>
              </span>
            </span>

            <p>
              Inovação é com a gente! A <strong>DonaFrost </strong>
              já conquistou diversos clientes, seja você mais um deles,
              veja tudo que pode ganhar com nossos serviços.
            </p>
          </header>

          <section className="even-columns">
            <Card
              icon={Champion}
              title="Produto Vencedor"
              description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
            />

            <Card
              icon={Champion}
              title="Produto Vencedor"
              description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
            />

            <Card
              icon={Champion}
              title="Produto Vencedor"
              description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto, entre eles podemos citar o CityFarm da FAG e Startup Garage."
            />
          </section>
        </section>
        <section id="testimonials">
          <header>
            <span>
              <p className="desktop-only">Conselho de quem conhece</p>
              <h2>Cada cliente importa!</h2>
            </span>

            <p>
              Quem já pediu sabe da qualidade das nossas receitas. Estamos tirando
              aquela ideia de que comida congelada precisa ser algo sem gosto.
            </p>
          </header>

          <section className="carousel">
            <div className="carousel-content">
              <TestimonialCard
                image={ProfileImageOne}
                testimony="Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso: provar uma boa comida DonaFrost no almoço."
                rating={4}
                name="Ellon Ma"
                role="CEO BING CHILLING"
              />

              <TestimonialCard
                image={ProfileImageTwo}
                testimony="A comida é saborosa, prática e chegou perfeitamente preparada. Uma ótima escolha para os dias mais corridos."
                rating={5}
                name="Ryan Gosling"
                role="Agrônomo"
              />
            </div>

            <div className="carousel-content" aria-hidden="true">
              <TestimonialCard
                image={ProfileImageOne}
                testimony="Certamente o mercado chinês de elétricos está bombando, só existe uma coisa melhor do que isso: provar uma boa comida DonaFrost no almoço."
                rating={4}
                name="Ellon Ma"
                role="CEO BING CHILLING"
              />

              <TestimonialCard
                image={ProfileImageTwo}
                testimony="A comida é saborosa, prática e chegou perfeitamente preparada. Uma ótima escolha para os dias mais corridos."
                rating={5}
                name="Ryan Gosling"
                role="Agrônomo"
              />
            </div>
          </section>
        </section>
        <section id="pricing" className="container">
          <header>
            <p className="desktop-only">Planos e preços</p>
            <h2>Nossos planos</h2>
          </header>

          <section className="even-columns gap-1.5">
            <div className="pricing-card">
              <span className="plan">
                <h3>Básico</h3>
                <p>Você tem direito a uma prova das comidas DonaFrost.</p>
              </span>

              <h2>Grátis</h2>

              <Button text="Pedir agora" secondary />

              <span className="hr" />

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Retire na loja</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Apenas 1 por CPF</p>
              </span>
            </div>

            <div className="pricing-card premium">
              <span className="bonus">
                <p>1º MÊS COM DESCONTO</p>
              </span>

              <span className="plan">
                <h3>Premium</h3>
                <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
              </span>

              <span className="price">
                <h2>R$ 89,90</h2>
                <p>/mês</p>
              </span>

              <Button text="Pedir agora" />

              <span className="hr" />

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>2 entregas</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>5 refeições por semana</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>2 sucos por semana</p>
              </span>
            </div>
            <div className="pricing-card">
              <span className="plan">
                <h3>Empresarial</h3>
                <p>Utilize nossa solução na sua empresa. Aprimore seu fluxo.</p>
              </span>

              <span className="price">
                <h2>R$ 129,90</h2>
                <p>/mês</p>
              </span>

              <Button text="Pedir agora" secondary />

              <span className="hr" />

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Com anúncios</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Até 10 produtos por dia</p>
              </span>

              <span className="features">
                <img src={Check} alt="Ícone check" width={24} height={24} />
                <p>Utilize sem limitações</p>
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