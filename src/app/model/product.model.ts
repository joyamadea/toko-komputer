export interface Product {
  id: string;
  image_url: string;
  stock: number;
  price: number;
  type: string;
  brand: string;
  model: string;
  description: {
    base_clock: number;
    boost_clock: number;
    core: number;
    thread: number;
    speed: string;
    size: string;
    chipset: string;
    compatibility: string;
  };
}
