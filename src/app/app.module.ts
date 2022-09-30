import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routerConfig } from './app.config';
import { appRoutes } from './app.routes';
import { AComponent, BComponent } from './components';

@NgModule({
  declarations: [AppComponent, AComponent, BComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, routerConfig),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
