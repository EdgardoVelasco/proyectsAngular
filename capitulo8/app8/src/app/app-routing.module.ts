import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './body/body.component';
import { AcercaComponent } from './acerca/acerca.component';

const routes: Routes = [
  {path:"", component:BodyComponent},
  {path:"acerca-de", component:AcercaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
