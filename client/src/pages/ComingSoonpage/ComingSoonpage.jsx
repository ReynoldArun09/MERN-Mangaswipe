import CustomHelmet from "../../components/Custom/CustomHelmet";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function ComingSoonpage() {
  return (
    <>
      <CustomHelmet
        title={"Manga Swipe - Coming Soon"}
        href={"/coming-soon"}
        description={"website for reading latest manga"}
      />
      <section className="xl:flex xl:justify-between">
        <LeftSection />
        <RightSection />
      </section>
    </>
  );
}
