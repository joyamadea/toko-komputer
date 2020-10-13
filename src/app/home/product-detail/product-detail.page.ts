import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Product } from "src/app/model/product.model";
import { ShopService } from "src/app/services/shop.service";

@Component({
  selector: "app-product-detail",
  templateUrl: "./product-detail.page.html",
  styleUrls: ["./product-detail.page.scss"],
})
export class ProductDetailPage implements OnInit {
  product: Product;
  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        return;
      }
      const shopId = paramMap.get("id");
      this.product = this.shopService.getDetailProduct(shopId);
    });
  }
}
