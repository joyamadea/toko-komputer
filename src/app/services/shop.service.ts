import { Injectable } from "@angular/core";
import { Product } from "../model/product.model";
import { ProductDetail } from "../model/product-description.model";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  private shop: Product[] = [
    {
      id: "1",
      image_url: "hi",
      name: "hi",
      stock: 20,
      price: 200000,
      type: "CPU",
      description: {
        base_clock: "23",
        boost_clock: "25",
        core: 8,
        thread: 2,
        speed: null,
        size: null,
        chipset: null,
        compatibility: null,
      },
    },
    {
      id: "2",
      image_url: "hi2",
      name: "hi2",
      stock: 20,
      price: 200000,
      type: "CPU",
      description: {
        base_clock: "20",
        boost_clock: "20",
        core: 20,
        thread: 20,
        speed: null,
        size: null,
        chipset: null,
        compatibility: null,
      },
    },
  ];
  constructor() {}

  getAllProducts() {
    return this.shop;
  }

  getDetailProduct(id) {
    return this.shop.find((shop) => {
      return shop.id === id;
    });
  }
}
