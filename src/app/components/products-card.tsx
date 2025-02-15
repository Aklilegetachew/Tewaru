"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useState } from "react";

interface ProductCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export function ProductCard({
  title,
  description,
  imageUrl,
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card
      className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105 hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CardHeader className="p-6">
        <div className="aspect-[4/3] relative">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-contain"
          />
        </div>
      </CardHeader>
      <CardContent className="text-center space-y-4">
        <p className="text-gray-600 text-sm min-h-[60px]">{description}</p>
        <h3 className="text-xl font-bold">{title}</h3>
      </CardContent>
      <CardFooter
        className={`
          flex justify-center pb-6 
          transition-all duration-300 
          ${
            isHovered
              ? "opacity-100 transform translate-y-0"
              : "opacity-0 transform translate-y-4"
          }
        `}
      >
        <Button className="bg-[#fba432] hover:bg-[#b68039]">LEARN MORE</Button>
      </CardFooter>
    </Card>
  );
}
