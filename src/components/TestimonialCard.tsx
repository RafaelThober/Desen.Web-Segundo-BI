import Star from "../assets/Star.svg";
import StarOuter from "../assets/StarOuter.svg";

interface TestimonialCardProps {
  testimony: string;
  rating: number;
  name: string;
  role: string;
}

export default function TestimonialCard({
  testimony,
  rating,
  name,
  role,
}: TestimonialCardProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part.charAt(0).toUpperCase())
    .join("");

  return (
    <div className="carousel-card">
      <div
        className="avatar-initials"
        role="img"
        aria-label={`Iniciais de ${name}`}
      >
        {initials}
      </div>

      <span className="testimony">
        <p>{testimony}</p>
      </span>

      <span className="rating">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src={index < rating ? Star : StarOuter}
            alt=""
            aria-hidden="true"
            width={22}
            height={20}
          />
        ))}
      </span>

      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
}
