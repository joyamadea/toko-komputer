import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Product } from "../model/product.model";

@Injectable({
  providedIn: "root",
})
export class ShopService {
  private shop: Product[] = [
    {
      id: "1",
      image_url:
        "https://ecs7.tokopedia.net/img/product-1/2020/7/7/9651507/9651507_ae33b43c-03ee-4613-be52-4e048dfd461f_992_992",
      name: "AMD Ryzen 5 3600XT",
      stock: 20,
      price: 3887000,
      type: "CPU",
      brand: "AMD",
      model: "Ryzen 5 3600XT",
      description: {
        base_clock: 3.8,
        boost_clock: 4.5,
        core: 6,
        thread: 12,
        speed: null,
        size: null,
        chipset: null,
        compatibility: null,
      },
    },
    {
      id: "2",
      image_url:
        "https://ecs7.tokopedia.net/img/product-1/2020/8/18/9651507/9651507_0a280d69-5042-4126-9b7a-692cf10e29e3_500_500",
      name: "GALAX Geforce RTX 2060",
      stock: 144,
      price: 5250000,
      type: "GPU",
      brand: "Galax",
      model: "Geforce RTX 2060",
      description: {
        base_clock: null,
        boost_clock: null,
        core: null,
        thread: null,
        speed: null,
        size: null,
        chipset: null,
        compatibility: null,
      },
    },
    {
      id: "3",
      image_url:
        "https://ecs7.tokopedia.net/img/product-1/2019/9/7/9651507/9651507_d1892152-82ab-4159-8f65-adbe77e583cf_800_800",
      name: "ADATA XPG SPECTRIX D41 DDR4-3000",
      stock: 2,
      price: 2080000,
      type: "RAM",
      brand: "ADATA",
      model: "XPG SPECTRIX D41 DDR4-3000",
      description: {
        base_clock: null,
        boost_clock: null,
        core: null,
        thread: null,
        speed: "PC4-24000",
        size: "2X16GB",
        chipset: null,
        compatibility: null,
      },
    },
    {
      id: "4",
      image_url:
        "https://ecs7.tokopedia.net/img/cache/700/product-1/2020/5/16/9651507/9651507_f5e679ec-c9d8-41e6-93f1-352276234ae8_1200_1200",
      name: "ASRock Z490 Phantom Gaming Velocita",
      stock: 144,
      price: 2080000,
      type: "Motherboard",
      brand: "ASRock",
      model: "Z490 Phantom Gaming Velocita",
      description: {
        base_clock: null,
        boost_clock: null,
        core: null,
        thread: null,
        speed: null,
        size: null,
        chipset: "Intel Z490",
        compatibility: "Intel LGA1200",
      },
    },
  ];
  constructor(private router: Router) {}

  getAllProducts() {
    return this.shop;
  }

  getDetailProduct(id) {
    return this.shop.find((shop) => {
      return shop.id === id;
    });
  }

  deleteProduct(id) {
    this.shop = this.shop.filter((shop) => {
      return shop.id !== id;
    });
  }

  getNewId() {
    return this.shop.length + 1;
  }

  addProduct(data) {
    this.shop.push(data);
  }

  editProduct(obj, id) {
    this.shop[id - 1] = obj;
  }
}
