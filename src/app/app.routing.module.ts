import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabelaCidadesComponent } from "./tabela-cidades/tabela-cidades.component";
import { FormCidadesComponent } from "./form-cidades/form-cidades.component";
import { HomeComponent } from "./home/home.component";


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'cidades', component: TabelaCidadesComponent },
  { path: 'cidades/:id', component: FormCidadesComponent },
  { path: 'cidade', component: FormCidadesComponent },
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
