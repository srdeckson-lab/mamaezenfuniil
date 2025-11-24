import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { trackProductView } from "@/lib/analytics";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

export const ProductCard = ({ title, description, image, link, badge }: ProductCardProps) => {
  const handleClick = () => {
    trackProductView(title);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={link} onClick={handleClick}>
        <Card className="overflow-hidden border-0 shadow-lg shadow-pink-500/10 hover:shadow-pink-500/30 transition-all duration-500 bg-gradient-to-br from-pink-800/90 to-pink-700/90 backdrop-blur group border border-pink-400/20">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {badge && (
              <div className="absolute top-4 right-4 bg-pink-500 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow-lg">
                {badge}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-pink-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-pink-100 group-hover:text-pink-300 transition-colors duration-300">
              {title}
            </h3>
            <p className="text-pink-200 line-clamp-2">{description}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
