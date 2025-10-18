import ArticleCard from "@/components/article-card";
import { Button } from "./ui/button";

export function LatestNews() {
  return (
    <section className="space-y-10 max-w-[998px] mx-auto">
      <h2 className="text-boldo-blue-dark text-2xl md:text-5xl font-bold">
        Latest News
      </h2>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        <ArticleCard
          imageSrc="/img/latest-1.png"
          category="Category"
          date="November 22, 2021"
          title="Pitch termsheet backing validation focus release."
          authorName="Chandler Bing"
          authorImageSrc="/img/latest-1-author.png"
        />
        <ArticleCard
          imageSrc="/img/latest-2.png"
          category="Category"
          date="November 22, 2021"
          title="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          authorName="Rachel Green"
          authorImageSrc="/img/latest-2-author.png"
        />
        <ArticleCard
          imageSrc="/img/latest-3.png"
          category="Category"
          date="November 22, 2021"
          title="Beta prototype sales iPad gen-z marketing network effects value proposition"
          authorName="Monica Geller"
          authorImageSrc="/img/latest-3-author.png"
        />
        <ArticleCard
          imageSrc="/img/latest-4.png"
          category="Category"
          date="November 22, 2021"
          title="Pitch termsheet backing validation focus release."
          authorName="Chandler Bing"
          authorImageSrc="/img/latest-1-author.png"
        />
        <ArticleCard
          imageSrc="/img/latest-5.png"
          category="Category"
          date="November 22, 2021"
          title="Seed round direct mailing non-disclosure agreement graphical user interface rockstar."
          authorName="Rachel Green"
          authorImageSrc="/img/latest-2-author.png"
        />
        <ArticleCard
          imageSrc="/img/latest-6.png"
          category="Category"
          date="November 22, 2021"
          title="Beta prototype sales iPad gen-z marketing network effects value proposition"
          authorName="Monica Geller"
          authorImageSrc="/img/latest-3-author.png"
        />
      </div>

      <div className="flex justify-center my-28">
        <Button size="lg" variant="secondary" className="cursor-pointer">
          Load more
        </Button>
      </div>
    </section>
  );
}

export default LatestNews;
