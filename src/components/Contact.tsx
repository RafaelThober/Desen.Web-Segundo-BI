import { useRef, useState, type FormEvent } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/contact.css";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [feedback, setFeedback] = useState("");

  const recaptchaRef = useRef<ReCAPTCHA>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!recaptchaToken) {
      setFeedback("Confirme que você não é um robô.");
      return;
    }

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
          recaptchaToken,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Não foi possível enviar o e-mail.");
      }

      setFeedback(data.message);
      setEmail("");
      setMessage("");
      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } catch (error) {
      setFeedback(
        error instanceof Error
          ? error.message
          : "Ocorreu um erro ao enviar o e-mail."
      );

      setRecaptchaToken(null);
      recaptchaRef.current?.reset();
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section id="contact">
      <header>
        <p>Fale com o clube</p>
        <h2>Vamos conversar sobre música?</h2>

        <span>
          Tire suas dúvidas sobre os planos, entregas, curadoria ou catálogo.
          Nossa equipe está pronta para ajudar você a encontrar o próximo disco.
        </span>
      </header>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Seu melhor e-mail"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <textarea
          placeholder="Conte sua dúvida. Ex: Como funciona a curadoria dos discos?"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          required
        />

        <div className="recaptcha-wrapper">
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
            onChange={(token) => setRecaptchaToken(token)}
            onExpired={() => setRecaptchaToken(null)}
            onErrored={() => {
              setRecaptchaToken(null);
              setFeedback("Não foi possível carregar o reCAPTCHA.");
            }}
          />
        </div>

        <button type="submit" disabled={isSending || !recaptchaToken}>
          {isSending ? "Enviando..." : "Enviar mensagem"}
        </button>

        {feedback && <p>{feedback}</p>}
      </form>
    </section>
  );
}
