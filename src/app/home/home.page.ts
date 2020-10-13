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
  }

  changeView() {
    if (this.viewList == true) {
      this.viewList = false;
    } else if (this.viewList == false) {
      this.viewList = true;
    }
  }
}
