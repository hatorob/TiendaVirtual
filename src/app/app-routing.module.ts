import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdidasComponent } from './components/adidas/adidas.component';
import { NikeComponent } from './components/nike/nike.component';
const routes: Routes = [
    { path: 'adidas', component: AdidasComponent },
    { path: 'nike', component: NikeComponent },
    /* { path: 'about', component: HomeComponent }, */
    { path: '**', pathMatch: 'full', redirectTo: 'adidas' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


