import Star from "../assets/Star.svg";
import StarOuter from "../assets/StarOuter.svg";

interface TestimonialCardProps {
  image: string;
  testimony: string;
  rating: number;
  name: string;
  role: string;
}

export default function TestimonialCard({
  image,
  testimony,
  rating,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={image} alt={`Foto de ${name}`} />

      <span className="testimony">
        <p>{testimony}</p>
      </span>

      <span className="rating">
        {Array.from({ length: 5 }, (_, index) => (
          <img
            key={index}
            src={index < rating ? Star : StarOuter}
            alt="Ícone estrela"
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