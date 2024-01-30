import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PageRoutingModule } from "./page-routing.module";
import { DragDropModule } from '@angular/cdk/drag-drop';
import {DialogModule} from 'primeng/dialog';
import {MatExpansionModule} from '@angular/material/expansion';
import {AccordionModule} from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {TableModule} from 'primeng/table';
import {ChartModule} from 'primeng/chart';
import { NgxUiLoaderModule } from "ngx-ui-loader";
import { NgxSpinnerModule } from 'ngx-spinner';
import {TabViewModule} from 'primeng/tabview';
import {RippleModule} from 'primeng/ripple';
import {DropdownModule} from 'primeng/dropdown';
import { FullCalendarModule } from '@fullcalendar/angular';
import {SelectButtonModule} from 'primeng/selectbutton';
import {CalendarModule} from 'primeng/calendar';
import {InputMaskModule} from 'primeng/inputmask';
import {InputNumberModule} from 'primeng/inputnumber';
import { FlexLayoutModule } from '@angular/flex-layout';
import {SidebarModule} from 'primeng/sidebar';
import {FileUploadModule} from 'primeng/fileupload';
import {CarouselModule} from 'primeng/carousel';
import {GalleriaModule} from 'primeng/galleria';
import {ImageModule} from 'primeng/image';
import {PanelModule} from 'primeng/panel';
import {EditorModule} from 'primeng/editor';
import {AutoCompleteModule} from 'primeng/autocomplete';
import {TooltipModule} from 'primeng/tooltip';
import {NgxPrintModule} from 'ngx-print';
import {FieldsetModule} from 'primeng/fieldset';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { BsDatepickerModule, BsLocaleService } from "ngx-bootstrap/datepicker";

import { PageComponent } from "./page.component";
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!

import es from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';
registerLocaleData(es);


FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,

]);

@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule,
    DragDropModule,
    DialogModule,
    MatExpansionModule,
    AccordionModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ChartModule,
    NgxUiLoaderModule,
    NgxSpinnerModule,
    TabViewModule,
    RippleModule,
    DropdownModule,
    FullCalendarModule,
    SelectButtonModule,
    CalendarModule,
    InputMaskModule,
    InputNumberModule,
    FlexLayoutModule,
    SidebarModule,
    FileUploadModule,
    CarouselModule,
    GalleriaModule,
    ImageModule,
    PanelModule,
    EditorModule,
    AutoCompleteModule,
    TooltipModule,
    NgxPrintModule,
    FieldsetModule,
    NgxGalleryModule,
    BsDatepickerModule
  ],
  exports: [],
  declarations: [
    PageComponent,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-MX" }
  ],
})
export class PageModule {
  constructor(private bsLocaleService: BsLocaleService) {
    this.bsLocaleService.use("en"); //fecha en español, datepicker
  }
 }
