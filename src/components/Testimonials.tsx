import ItemCarousel from "./ItemCarousel";

const Testimonials = () => {
  return (
    <section className="bg-brand-10">
      <div className="md:container mx-auto mt-20 py-10 sm:py-12 px-5">
        <div className="mb-10 md:mb-14">
          <h1 className="text-slate-50 max-w-3xl mr-auto text-left leading-8 sm:leading-[50px] md:leading-[60px] tracking-tight  text-[28px] xs:text-[36px] sm:text-[40px] md:text-5xl mb-8">
            An enterprise template to ramp up your company website
          </h1>
        </div>
        <ItemCarousel />
      </div>
    </section>
  );
};

export default Testimonials;
