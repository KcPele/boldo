import { Heading } from "@/components/heading";
import { FeaturedArticle } from "@/components/featured-article";
import { Separator } from "@radix-ui/react-separator";

export default function Home() {
  return (
    <div>
      <Heading />
      <FeaturedArticle />
      <Separator className="my-20 border-boldo-blue-dark border-[0.5px]" />
    </div>
  );
}
