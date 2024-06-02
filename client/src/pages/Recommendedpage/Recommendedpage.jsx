import CustomHelmet from "../../components/Custom/CustomHelmet"
import RightSection from "../../components/Common/RightSection"
import LeftSection from "./LeftSection"

export default function Recommendedpage() {
  return (
    <>
      <CustomHelmet
        title={"Manga Swipe - Most Recommended Page"}
        href={"/most-recommended"}
        description={"website for reading latest manga"}
      />
      <section className="xl:flex xl:justify-between">
        <LeftSection />
        <RightSection />
      </section>
    </>
  )
}
