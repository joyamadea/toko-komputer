import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController, ToastController } from '@ionic/angular';
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
  constructor(private router: Router, private shopService: ShopService, private alertCtrl: AlertController, private toastCtrl: ToastController) {}

  ngOnInit() {
    this.newId = this.shopService.getNewId();
  }

  onSubmit(form: NgForm) {
    this.confirmAdd(form);
  }

  addProduct(form){
    this.obj = {
      id: this.newId.toString(),
      image_url: form.value.url,
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

    this.shopService.addProduct(this.obj);
    this.router.navigate(["/admin"]);
    this.presentToast();
  }

  async confirmAdd(form: NgForm) {
    const alert = await this.alertCtrl.create({
      header: "Confirm Add",
      message: "Add new product?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.alertCtrl.dismiss();
          },
        },
        {
          text: "Add",
          handler: () => {
            this.addProduct(form);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Item successfully added",
      duration: 3000,
      color: "success",
    });
    toast.present();
  }
}
