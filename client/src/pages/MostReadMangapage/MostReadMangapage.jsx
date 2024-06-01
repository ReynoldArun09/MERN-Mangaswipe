import CustomHelmet from "../../components/Custom/CustomHelmet";
import RightSection from "../../components/Common/RightSection";
import LeftSection from "./LeftSection";

export default function MostReadMangapage() {
  return (
    <>
      <CustomHelmet
        title={"Manga Swipe - Recommended Page"}
        href={"/on-going"}
        description={"website for reading latest manga"}
      />
      <section className="xl:flex xl:justify-between">
        <LeftSection />
        <RightSection />
      </section>
    </>
  );
}
