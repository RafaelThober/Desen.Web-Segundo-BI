import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    console.log({
      email,
      message,
    });
  }

  return (
    <section id="contact">
      <header>
        <p>Envie sua dúvida</p>
        <h2>Entre em contato</h2>

        <span>
          Entre em contato, estamos dispostos a tirar qualquer dúvida, seja um
          orçamento ou uma dúvida técnica sobre nossos produtos.
        </span>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor Email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <textarea
          placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}