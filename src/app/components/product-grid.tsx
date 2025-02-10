import { ProductCard } from "./products-card";

const products = [
  {
    title: "N5 GNSS Receiver",
    description:
      "N5 GNSS receiver provides a more convenient, reliable, and efficient experience for field workers",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fx0jac7Cl6slv5DlsDWW8FaScb0Gfc.png",
  },
  {
    title: "N3 IMU GNSS Receiver",
    description:
      "Featuring enhanced UHF for up to 15km working range, the N3 receiver making it more efficient for your survey tasks",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fx0jac7Cl6slv5DlsDWW8FaScb0Gfc.png",
  },
  {
    title: "N2 Palm GNSS Receiver",
    description:
      "The N2 is specifically designed for land survey, marine, precision agriculture, machine control, and GIS",
    imageUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-fx0jac7Cl6slv5DlsDWW8FaScb0Gfc.png",
  },
];

export function ProductGrid() {
  return (
    <section className="py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <ProductCard key={product.title} {...product} />
          ))}
        </div>
        <div className="text-right mt-4 text-sm text-gray-500">
          Showing 6 of 3 items
        </div>
      </div>
    </section>
  );
}
