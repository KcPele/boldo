import Image from "next/image";
import { cn } from "@/lib/utils";

export type ArticleCardProps = {
  className?: string;
  imageSrc: string;
  category: string;
  date: string;
  title: string;
  authorName: string;
  authorImageSrc: string;
};

export function ArticleCard({
  className,
  imageSrc,
  category,
  date,
  title,
  authorName,
  authorImageSrc,
}: ArticleCardProps) {
  return (
    <article className={cn("flex flex-col gap-6", className)}>
      {/* Cover image (rounded 12px per Figma) */}
      <div className="relative w-full flex-1 rounded-xl">
        <Image
          src={imageSrc}
          alt={`${title} image`}
          width={600}
          height={209}
          className="w-full object-cover"
          priority={false}
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 justify-between ">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-3">
            <span className="text-boldo-blue-dark font-bold">{category}</span>
            <span className="text-muted-foreground">{date}</span>
          </div>
          <p className="md:text-2xl text-xl leading-[1.6] text-black">
            {title}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="size-8 overflow-hidden rounded-full">
            <Image
              src={authorImageSrc}
              alt={`${authorName} avatar`}
              width={32}
              height={32}
              className="h-full w-full object-cover"
            />
          </div>
          <span className="text-black">{authorName}</span>
        </div>
      </div>
    </article>
  );
}

export default ArticleCard;
