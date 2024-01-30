import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { AuthService } from 'app/shared/auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { window } from 'rxjs/operators';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {
  isNavbarCollapsed = true;
  loginFormSubmitted = false;
  isLoginFailed = false;
  returnUrl: any;

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    rememberMe: new FormControl(true)
  });

  constructor(
    private modalService: NgbModal,
    private router: Router, 
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
   
  }
  toggleNavbarCollapsing() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }

  get lf() {
    return this.loginForm.controls;
  }

  // On submit button click
  onSubmit() {
    this.loginFormSubmitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    console.log('Login');
    this.spinner.show(undefined,
      {
        type: 'ball-beat',
        size: 'medium',
        bdColor: 'rgb(46, 106, 169)',
        color: '#fff',
        fullScreen: true
      });
      setTimeout(() => {
        this.modalService.dismissAll();
          this.spinner.hide();
          // this.router.navigate(["../../../page"]);
      }, 1500);
          

    // this.authService
    // .signinUser(this.loginForm.value.username, this.loginForm.value.password)
    // .pipe(first())
    // .subscribe(
    //   (data) => {
    //     console.log(data);
    //     if (!data.error) {
    //       this.spinner.hide();
    //       this.router.navigate(["../../../page"]);
    //     } else {
    //       Swal.fire({
    //         icon: "error",
    //         title: "Error",
    //         text: data.mensaje,
    //       });
    //       this.spinner.hide();
    //     }
    //   },
    //   (error) => {}
    // );
  }

  openLogin(content) {
    this.modalService.open(content, {
      size: "sm",
      centered: true,
      scrollable: true,
      backdrop: 'static',
      keyboard: false
    });
  }

  goLogin(){ 
    // this.router.navigate(["./pages/login"]);
  }

}
