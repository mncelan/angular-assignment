import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryCategoryService } from './services/in-memory-catery.service';
import { CroceryService } from './services/crocery.service';

import { AppRoutingModule } from './app-routing.module';
import { CategoryModule } from './category/category.module';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CategoryModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryCategoryService, { dataEncapsulation: false }
    )

  ],
  providers: [
    CroceryService,
  ],
  bootstrap: [AppComponent]

  
})
export class AppModule { }
