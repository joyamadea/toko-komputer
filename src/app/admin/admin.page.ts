import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AlertController, ToastController } from "@ionic/angular";
import { ShopService } from "../services/shop.service";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.page.html",
  styleUrls: ["./admin.page.scss"],
})
export class AdminPage implements OnInit {
  products: any;
  mySubscription: any;
  constructor(
    private shopService: ShopService,
    private router: Router,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController
  ) {}

  ngOnInit() {}

  ionViewWillEnter() {
    this.products = this.shopService.getAllProducts();
  }

  deleteProduct(id) {
    this.shopService.deleteProduct(id);
    this.ionViewWillEnter();
    this.presentToast();
  }

  editProduct(id) {
    this.router.navigate(["/admin/edit-product", id]);
  }

  async confirmDelete(id) {
    const alert = await this.alertCtrl.create({
      header: "Confirm Delete",
      message: "Are you sure you want to delete?",
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: () => {
            this.alertCtrl.dismiss();
          },
        },
        {
          text: "Delete",
          handler: () => {
            this.deleteProduct(id);
          },
        },
      ],
    });

    await alert.present();
  }

  async presentToast() {
    const toast = await this.toastCtrl.create({
      message: "Item successfully deleted",
      duration: 3000,
      color: "danger",
    });
    toast.present();
  }
}
