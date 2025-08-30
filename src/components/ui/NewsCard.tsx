// src/components/ui/NewsCard.tsx
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
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
}: NewsCardProps) {
  return (
    <Link href={href} className="block">
      <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
        <div className={`relative h-48 ${gradient} flex items-center justify-center text-white`}>
          {icon}
          <p className="text-sm mt-2">{category}</p>
        </div>
        <CardHeader>
          <Badge variant="secondary" className="w-fit mb-2">{category}</Badge>
          <CardTitle className="text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-500 mb-1">{date}</p>
          <p className="text-xs text-gray-400 mb-4">{author}</p>
          <Button variant="outline" size="sm" className="flex items-center">
            Leer Más <ExternalLink className="w-4 h-4 ml-1" />
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}