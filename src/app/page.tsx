import { Separator } from "@radix-ui/react-separator";
import { CallToAction } from "@/components/call-to-action";
import { FeaturedArticle } from "@/components/featured-article";
import { Heading } from "@/components/heading";
import { LatestNews } from "@/components/latest-news";

export default function Home() {
  return (
    <div>
      <Heading />
      <FeaturedArticle />
      <Separator className="my-20 border-boldo-blue-dark border-[0.5px]" />
      <LatestNews />
      <CallToAction />
    </div>
  );
}
