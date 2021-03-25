import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegularExampleFormComponent } from './regular-example-form/regular-example-form.component';
import { FormlyExampleFormComponent } from './formly-example-form/formly-example-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/regular', pathMatch: 'full' },
  { path: 'regular', component: RegularExampleFormComponent },
  { path: 'formly', component: FormlyExampleFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
