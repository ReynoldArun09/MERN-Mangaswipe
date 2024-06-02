import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { HeroSliderData } from "../../utils/data";

export default function HeroSection() {
  const options = { delay: 4000 };
  const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay(options)]);
  return (
    <section className="overflow-hidden relative z-[-1] mx-auto h-fit" ref={emblaRef}>
      <div className="flex h-[100%]">
        {HeroSliderData?.map((slider) => (
          <div className="relative flex-grow-0 flex-shrink-0 basis-full" key={slider.id}>
            <img src={slider.image} alt="slider-image" className="w-[100%] h-[80%] lg:h-[80%]" />
          </div>
        ))}
      </div>
    </section>
  );
}
