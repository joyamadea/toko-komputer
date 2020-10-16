import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";
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
  productExist = false;
  constructor(
    private activatedRoute: ActivatedRoute,
    private shopService: ShopService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if (!paramMap.has("id")) {
        return;
      }
      const shopId = paramMap.get("id");
      this.product = this.shopService.getDetailProduct(shopId);
      if (this.product != null || this.product != undefined) {
        this.productExist = true;
      }
    });
  }

  onSubmit(form: NgForm) {
    this.confirmEdit(form);
  }

  editProduct(form: NgForm) {
    this.obj = {
      id: this.product.id,
      image_url: form.value.url,
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

    this.shopService.editProduct(this.obj, this.product.id);
    this.router.navigate(["/admin"]);

    this.presentToast();
  }

  async confirmEdit(form: NgForm) {
    const alert = await this.alertCtrl.create({
      header: "Confirm Edit",
      message: "Save changes?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.alertCtrl.dismiss();
          },
        },
        {
          text: "Save",
          handler: () => {
            this.editProduct(form);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Item successfully edited",
      duration: 3000,
      color: "success",
    });
    toast.present();
  }
}
