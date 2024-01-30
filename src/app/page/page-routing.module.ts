import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';


const routes: Routes = [
  {
    path: '',
    component: PageComponent,
    data: {
      title: 'Page'
    },
  },
  // {
  //   path: "nueva-consulta",
  //   component: NuevaConsultaComponent,
  //   data: {
  //     title: "Nueva consulta",
  //   },
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule { }
