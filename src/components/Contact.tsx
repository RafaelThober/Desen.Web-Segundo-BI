import { useState, type FormEvent } from "react";
import "../styles/contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setIsSending(true);
    setFeedback("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          message,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar o e-mail.");
      }

      setFeedback(data.message);
      setEmail("");
      setMessage("");
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar o e-mail."
      );
    } finally {
      setIsSending(false);
    }
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

        <button type="submit" disabled={isSending}>
          {isSending ? "Enviando..." : "Enviar"}
        </button>

        {feedback && <p>{feedback}</p>}
      </form>
    </section>
  );
}