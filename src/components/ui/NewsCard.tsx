// src/components/ui/NewsCard.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image"; // Import next/image
import { ExternalLink } from "lucide-react";

interface NewsCardProps {
  href: string;
  category: string;
  title: string;
  description: string;
  date: string;
  author: string;
  icon: React.ReactNode;
  gradient: string;
  imageUrl?: string; // Make imageUrl optional
}

export default function NewsCard({
  href,
  category,
  title,
  description,
  date,
  author,
  icon,
  gradient,
  imageUrl, // Destructure imageUrl
}: NewsCardProps) {
  return (
    <Link href={href} className="block h-full">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
        <div className="relative h-48 w-full">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={`Imagen para ${title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className={`h-full w-full ${gradient} flex flex-col items-center justify-center text-white p-4`}>
              <div className="w-16 h-16">{icon}</div>
              <p className="text-lg mt-2 font-semibold text-center">{category}</p>
            </div>
          )}
        </div>
        <div className="flex flex-col flex-grow">
          <CardHeader>
            <Badge variant="secondary" className="w-fit mb-2">{category}</Badge>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription className="line-clamp-2">{description}</CardDescription>
          </CardHeader>
          <CardContent className="flex-grow flex flex-col justify-between">
            <div>
              <p className="text-sm text-gray-500 mb-1">{date}</p>

              <p className="text-xs text-gray-400 mb-4 line-clamp-1">{author}</p>
            </div>
            <Button variant="outline" size="sm" className="flex items-center mt-auto w-fit">
              Leer Más <ExternalLink className="w-4 h-4 ml-1" />
            </Button>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}