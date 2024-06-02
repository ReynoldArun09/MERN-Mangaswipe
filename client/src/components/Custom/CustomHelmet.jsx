import { Helmet } from "react-helmet-async";

export default function CustomHelmet({ title = "Manga Swipe - Read Your Fav Manga", href, description = "Website for reading later manga/manhwa" }) {
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="canonical" href={href} />
      <meta name="description" content={description} />
    </Helmet>
  );
}
