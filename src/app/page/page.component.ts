import { NgxSpinnerService } from 'ngx-spinner';
import { AuthService } from 'app/shared/auth/auth.service';
import { Router } from '@angular/router';
import { ApiService } from './../shared/services/api.service';
import { Component, ChangeDetectorRef } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Swal from "sweetalert2";
import { first } from 'rxjs/operators';
import { TouchSequence } from 'selenium-webdriver';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})

export class PageComponent {
  txtAgregarEncuesta = '';
  frm: FormGroup;
  FormSubmitted = false;
  selected: boolean = false;
  arrPreguntas = [];
  showEncuesta = false;

  countEncuesta = 0;
  displayModalResponsive = false;
  modalService: any;

  constructor() {}

  ngOnInit(): void {
  }

}


