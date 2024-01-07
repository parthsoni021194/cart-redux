import { useTitle } from "../hooks/useTitle";
import { ProductCard } from "../components";

export const Home = () => {
  useTitle("Home");

  const products = [
    {"id": 1, "name": "Sony Wh-Ch510 Bluetooth Wireless", "price": 149, "image": "/assets/headphone-1.jpg"},
    {"id": 2, "name": "boAt Rockerz 450", "price": 49, "image": "/assets/headphone-2.jpg"},
    {"id": 3, "name": "JBL Tune 760NC", "price": 179, "image": "/assets/headphone-3.jpg"},
    {"id": 4, "name": "Logitech H111 Wired", "price": 39, "image": "/assets/headphone-4.jpg"},
    {"id": 5, "name": "APPLE Airpods Max Bluetooth Headset", "price": 199, "image": "/assets/headphone-5.jpg"},
    {"id": 6, "name": "ZEBRONICS Zeb-Thunder Wired", "price": 29, "image": "/assets/headphone-6.jpg"},
    {"id": 7, "name": "Rockerz 370 Wireless Headphone", "price": 85, "image": "/assets/headphone-7.jpg"},
    {"id": 8, "name": "Sennheiser's MOMENTUM 4 Wireless", "price": 336, "image": "/assets/headphone-8.png"},
    {"id": 9, "name": "Dyson Zone™ ANC Headphones", "price": 720, "image": "/assets/headphone-9.jpg"}
  ]

  return (
    <main>
      <section className="products">
        {/* <img src={products.image}/> */}
        { products.map((product) => (
          <ProductCard key={product.id} product={product} />
        )) }        
      </section>
    </main>
  )
}