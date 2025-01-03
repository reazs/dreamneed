import Image from "next/image";
import { Button } from "../ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";

export default function ProductCard (){


    return  <Card key={i} className="transition-transform hover:scale-105">
    <CardHeader>
      <CardTitle>Product {i}</CardTitle>
    </CardHeader>
    <CardContent>
      <Image
        src={`/product-${i}.jpg`}
        alt={`Product ${i}`}
        width={300}
        height={300}
        className="w-full h-64 object-cover rounded-md"
      />
    </CardContent>
    <CardFooter className="flex justify-between">
      <span className="font-bold">৳1999</span>
      <Button>Add to Cart</Button>
    </CardFooter>
  </Card>

}