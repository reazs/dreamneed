import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { productT } from "@/types";

export default function ProductCard ({product}: {product:productT}){


    return  <Card key={product.id} className="transition-transform hover:scale-105">
    <CardHeader>
      <CardTitle>Product {product.name}</CardTitle>
    </CardHeader>
    <CardContent>
      <Image
        src={`/product-${product.images[0]}.jpg`}
        alt={`Clothes img`}
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-md"
      />
    </CardContent>
    <CardFooter className="flex justify-between">
      <span className="font-bold">${product.price}</span>
      <Button>Add to Cart</Button>
    </CardFooter>
  </Card>

}