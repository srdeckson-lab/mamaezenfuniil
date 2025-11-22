import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  badge?: string;
}

export const ProductCard = ({ title, description, image, link, badge }: ProductCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -10 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link to={link}>
        <Card className="overflow-hidden border-0 shadow-soft hover:shadow-hover transition-all duration-500 bg-gradient-card group">
          <div className="relative aspect-[3/4] overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {badge && (
              <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold shadow-elevated">
                {badge}
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
            <p className="text-muted-foreground line-clamp-2">{description}</p>
          </div>
        </Card>
      </Link>
    </motion.div>
  );
};
