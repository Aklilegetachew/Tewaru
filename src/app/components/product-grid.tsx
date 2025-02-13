import { ProductCard } from "./products-card";

export function ProductGrid({ products }: { products: any }) {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product: any) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
        <div className="text-right mt-4 text-sm text-gray-500">
          Showing {products.length} of {products.length} items
        </div>
      </div>
    </section>
  );
}
