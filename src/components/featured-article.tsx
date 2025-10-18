import Image from "next/image";

export function FeaturedArticle() {
  return (
    <section className=" grid md:grid-cols-2 gap-10 items-center">
      {/* Left image */}
      <div className="order-1 md:order-none">
        <div className="relative w-full overflow-hidden rounded-3xl">
          <Image
            src="/img/featured-hero.png"
            alt="Featured article image"
            width={600}
            height={421}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center gap-3">
          <span className="text-boldo-blue-dark font-bold">Category</span>
          <span className="text-muted-foreground">November 22, 2021</span>
        </div>
        <h2 className="md:text-5xl text-3xl leading-[1.5] text-black">
          Pitch termsheet backing validation focus release.
        </h2>

        <div className="flex items-center gap-3">
          <div className="size-8 overflow-hidden rounded-full">
            <Image
              src="/img/featured-author.png"
              alt="Featured author"
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-black">Chandler Bing</span>
        </div>
      </div>
    </section>
  );
}

export default FeaturedArticle;
