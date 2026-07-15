"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, ShoppingCart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { CHECKOUT_PLATFORMS } from "@/lib/constants";
import type { Ebook } from "@/lib/data/ebooks";
import type { Course } from "@/lib/data/courses";

type ProductCardProps = {
  product: Ebook | Course;
  type: "ebook" | "course";
};

function getCheckoutUrl(product: Ebook | Course) {
  if (product.checkoutUrl) return product.checkoutUrl;
  if (product.platform) {
    const url = CHECKOUT_PLATFORMS[product.platform];
    if (url) return url;
  }
  return "#";
}

export function ProductCard({ product, type }: ProductCardProps) {
  const image = "banner" in product ? product.banner : product.image;
  const href =
    type === "course"
      ? `/cursos/${product.slug}`
      : getCheckoutUrl(product);

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={product.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-transparent to-transparent" />
        {"category" in product && (
          <Badge className="absolute top-3 left-3">{product.category}</Badge>
        )}
        {"featured" in product && product.featured && (
          <Badge className="absolute top-3 right-3" variant="default">
            Destaque
          </Badge>
        )}
      </div>
      <CardContent className="flex flex-col gap-3 p-5">
        <h3 className="text-lg font-bold text-white line-clamp-2">
          {product.title}
        </h3>
        <p className="text-sm text-white/50 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3.5 w-3.5 ${
                  i < Math.floor(product.rating)
                    ? "fill-gold text-gold"
                    : "text-white/20"
                }`}
              />
            ))}
          </div>
          <span className="text-xs text-white/40">
            {product.rating} ({product.reviews} avaliações)
          </span>
        </div>
        <div className="flex items-end justify-between pt-2">
          <div>
            <p className="text-2xl font-bold text-gold">
              {formatPrice(product.price)}
            </p>
            {product.originalPrice && (
              <p className="text-xs text-white/30 line-through">
                {formatPrice(product.originalPrice)}
              </p>
            )}
          </div>
          <Button size="sm" asChild>
            {type === "course" ? (
              <Link href={href}>Ver Curso</Link>
            ) : (
              <a href={href} target="_blank" rel="noopener noreferrer">
                <ShoppingCart className="h-4 w-4" />
                Comprar
              </a>
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
