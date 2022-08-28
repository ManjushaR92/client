import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { AboutComponent } from './components/about/about.component';
import { OrderComponent } from './components/order/order.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { DemoComponent } from './components/demo/demo.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomerListComponent,
    AboutComponent,
    OrderComponent,
    NavbarComponent,
    CardViewComponent,
    ListViewComponent,
    DemoComponent,
    DocumentationComponent,
    AddCustomerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
