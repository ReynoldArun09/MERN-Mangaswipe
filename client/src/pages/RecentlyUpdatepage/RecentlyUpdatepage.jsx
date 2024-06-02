import CustomHelmet from "../../components/Custom/CustomHelmet";
import RightSection from "../../components/Common/RightSection";
import LeftSection from "./LeftSection";

export default function RecentlyUpdatepage() {
  return (
    <>
      <CustomHelmet
        title={"Manga Swipe | Recently Updated Mangas"}
        href={"/recent-update"}
        description={"website for reading latest manga"}
      />
      <section className="xl:flex xl:justify-between">
        <LeftSection />
        <RightSection />
      </section>
    </>
  );
}
