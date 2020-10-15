import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { ShopService } from "src/app/services/shop.service";

@Component({
  selector: "app-add-product",
  templateUrl: "./add-product.page.html",
  styleUrls: ["./add-product.page.scss"],
})
export class AddProductPage implements OnInit {
  obj: any;
  productType: string;
  newId: any;
  constructor(private router: Router, private shopService: ShopService) {}

  ngOnInit() {
    this.newId = this.shopService.getNewId();
  }

  onSubmit(form: NgForm) {
    console.log(form.value);
    this.obj = {
      id: this.newId.toString(),
      image_url: form.value.url,
      name: form.value.brand + " " + form.value.model,
      stock: form.value.stock,
      price: form.value.price,
      type: form.value.type,
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
    this.shopService.addProduct(this.obj);
    this.router.navigate(["/admin"]);
  }
}
