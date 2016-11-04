import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import appRoutes from './app.routes';

@NgModule({
  imports: [appRoutes],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule {}
