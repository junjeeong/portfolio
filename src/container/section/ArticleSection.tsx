import Article from "@/components/Article";
import { articles } from "@/mock/articles";

const ArticleSection = () => {
  return (
    <section className="flex flex-col w-full h-full gap-4 fadein-fast">
      {articles.map((article, index) => (
        <Article key={index} {...article} />
      ))}
    </section>
  );
};

export default ArticleSection;
