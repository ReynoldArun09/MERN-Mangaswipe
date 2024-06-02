import CustomHelmet from "../../components/Custom/CustomHelmet";
import RightSection from "../../components/Common/RightSection";
import LeftSection from "./LeftSection";

export default function Popularpage() {
  return (
    <>
      <CustomHelmet
        title={"Manga Swipe | Popular Mangas"}
        href={"/popular-mangas"}
        description={"website for reading latest manga"}
      />
      <section className="xl:flex xl:justify-between">
        <LeftSection />
        <RightSection />
      </section>
    </>
  );
}
