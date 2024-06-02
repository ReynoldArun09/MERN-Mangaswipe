import { Link } from "react-router-dom";
import { FooterLinksData } from "../utils/data";

export default function FooterLinks() {
  return (
    <div className="flex space-x-10 lg:mx-auto lg:space-x-40">
      <div className="lg:grid lg:grid-cols-2 lg:gap-x-10">
        {FooterLinksData.map((links) => (
          <Link to={`${links.link}`} key={links.title} className="lg:py-2">
            <p className="hover:text-manga-yellow">{links.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
