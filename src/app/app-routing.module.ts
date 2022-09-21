import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '',
      component:  LayoutComponent,
      children: [
        {
          path: '',
          redirectTo: '/form',
          pathMatch: 'full',
        },
        {
          path: 'form',
          loadChildren: () => import ('./example/example.module').then (m => m.ExampleModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
