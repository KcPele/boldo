import { Button } from "@/components/ui/button";

export function CallToAction() {
  return (
    <section className="relative overflow-hidden rounded-xl bg-boldo-blue-dark py-20 mb-21 p-2">
      <div className="absolute  bottom-20 left-[50%] w-7xl h-[1293px]  rounded-full bg-boldo-blue-dark-bg"></div>

      <div className="mx-auto relative z-10 max-w-[756px] text-center">
        <h2 className="text-boldo-white text-3xl md:text-[48px] leading-[1.5]">
          An enterprise template to ramp up your company website
        </h2>

        <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Your email address"
            className="h-14 w-full sm:w-[370px] rounded-full bg-boldo-white border-2 border-boldo-white px-4 text-black placeholder:text-black outline-none"
            aria-label="Email address"
          />
          <Button
            size="lg"
            variant="primaryGreen"
            className="w-full sm:w-auto cursor-pointer"
          >
            Start now
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
