import { Component, OnInit } from "@angular/core"
import { FormControl, FormGroup, Validators } from "@angular/forms"
import { Router } from "@angular/router"
import { Platform } from "@ionic/angular"
import { ToastService } from "../services/toast.service"

@Component({
  selector: "app-login",
  templateUrl: "./login.page.html",
  styleUrls: ["./login.page.scss"],
})
export class LoginPage implements OnInit {
  form: FormGroup | any
  type: boolean = true
  showSpinnerDot: boolean = false
  hardwareButton: any

  constructor(
    private router: Router,
    private platform: Platform,
    private toast: ToastService
  ) {}

  ngOnInit() {
    this.initializeForm()
  }

  initializeForm() {
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required],
      }),
    })
  }
  updateFormValue() {
    this.form.reset()
  }
  changeType() {
    this.type = !this.type
  }
  onSubmit() {
    if (!this.form.value.phone) {
      this.toast.error("Le numéro de téléphone est requis !")
    } else {
      this.login()
    }
  }
  login() {
    this.showSpinnerDot = true
    setTimeout(() => {
      this.showSpinnerDot = false
      this.router.navigate(["home"])
    }, 2000)
  }
}
