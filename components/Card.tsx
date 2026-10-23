import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  href?: string;
  linkText?: string;
};

export default function Card({
  title,
  description,
  href,
  linkText = "Selengkapnya →",
}: CardProps) {
  const content = (
    <>
      <h3>{title}</h3>
      <p>{description}</p>
      {href && <span className="card-link">{linkText}</span>}
    </>
  );

  if (href) {
    return (
      <Link href={href} className="card">
        {content}
      </Link>
    );
  }

  return <div className="card">{content}</div>;
}
