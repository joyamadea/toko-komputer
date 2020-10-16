import { Component } from "@angular/core";
import { ShopService } from "../services/shop.service";

@Component({
  selector: "app-home",
  templateUrl: "home.page.html",
  styleUrls: ["home.page.scss"],
})
export class HomePage {
  products: any;
  viewList = true;
  constructor(private shopService: ShopService) {}

  ngOnIt() {}

  ionViewWillEnter() {
    this.products = this.shopService.getAllProducts();
    // this.products.forEach((element) => {
    //   if (element.stock <= 0 && element.id != this.products.length + 1) {
    //     this.products[parseInt(element.id) - 1] = this.products[
    //       parseInt(element.id)
    //     ];
    //     this.products.splice(element.id, 1);
    //   } else if (element.id == this.products.length + 1) {
    //     this.products.splice(element.id, 1);
    //   }
    // });
  }

  changeView() {
    if (this.viewList == true) {
      this.viewList = false;
    } else if (this.viewList == false) {
      this.viewList = true;
    }
  }
}
