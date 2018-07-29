import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { PortfolioPageComponent } from './portfolio-page/portfolio-page.component';

const appRoutes: Routes = [
  { path: 'portfolio', component: PortfolioPageComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent, PortfolioPageComponent],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
