import Image from "next/image";
import type { LearnArticle } from "@/lib/learnArticles";
import { getEditorialPhoto } from "@/lib/editorialPhotoLibrary";

type Props = { article: LearnArticle };

export function LearnCardVisual({ article }: Props) {
  const photo = article.photo ?? getEditorialPhoto(article.slug);
  if (photo) {
    const base = photo.src.replace(/&w=\d+/, "");
    return (
      <div className="learn-card-cover">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photo.src}
          srcSet={`${base}&w=480 480w, ${base}&w=800 800w, ${base}&w=1200 1200w`}
          sizes="(max-width: 620px) 100vw, (max-width: 900px) 50vw, 33vw"
          alt={photo.alt}
          width={1200}
          height={750}
          loading="lazy"
          decoding="async"
        />
        <span className="learn-card-cover-label">{article.category}</span>
      </div>
    );
  }
  if (article.illustration) {
    return (
      <div className="learn-card-cover">
        <Image src={article.illustration.src} alt={article.illustration.alt} width={640} height={400} />
        <span className="learn-card-cover-label">{article.category}</span>
      </div>
    );
  }
  return (
    <div className="learn-card-cover learn-card-cover-fallback" aria-hidden="true">
      <span>{article.category}</span>
    </div>
  );
}
