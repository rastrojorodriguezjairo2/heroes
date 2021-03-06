import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  imports: [
    BrowserModule, 
    FormsModule, 
    AppRoutingModule
  ],
  declarations: [
    AppComponent, 
    HeroesComponent, 
    HeroDetailComponent, 
    DashboardComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
