import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Product } from "src/app/model/product.model";
import { ShopService } from "src/app/services/shop.service";

@Component({
  selector: "app-edit-product",
  templateUrl: "./edit-product.page.html",
  styleUrls: ["./edit-product.page.scss"],
})
export class EditProductPage implements OnInit {
  product: Product;
  obj: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private router: Router
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

  onSubmit(form: NgForm) {
    this.obj = {
      id: this.product.id,
      image_url: form.value.url,
      name: form.value.brand + " " + form.value.model,
      stock: form.value.stock,
      price: form.value.price,
      type: this.product.type,
      brand: form.value.brand,
      model: form.value.model,
      description: {
        base_clock: form.value.baseClock,
        boost_clock: form.value.boostClock,
        core: form.value.core,
        thread: form.value.thread,
        speed: form.value.speed,
        size: form.value.size,
        chipset: form.value.chipset,
        compatibility: form.value.compatibility,
      },
    };

    console.log(this.obj);
    this.shopService.editProduct(this.obj, this.product.id);
    this.router.navigate(["/admin"]);
  }
}
