export interface Product {
  id: string;
  image_url: string;
  name: string;
  stock: number;
  price: number;
  type: string;
  description: {
    base_clock: string;
    boost_clock: string;
    core: number;
    thread: number;
    speed: number;
    size: number;
    chipset: string;
    compatibility: string;
  };
}
