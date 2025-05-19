import type { ReactNode } from "react";

interface CategoryHeroProps {
  title: string;
  description: string;
  imageUrl: string;
  children?: ReactNode;
}

const CategoryHero = ({
  title,
  description,
  imageUrl,
  children,
}: CategoryHeroProps) => {
  return (
    <div
      className="relative bg-gray-900 h-96"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 flex items-center justify-center text-center px-4">
        <div className="text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl mb-4">
            {title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto">{description}</p>
          {children}
        </div>
      </div>
    </div>
  );
};

export default CategoryHero;
