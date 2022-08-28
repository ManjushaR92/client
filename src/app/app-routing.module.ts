import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AddCustomerComponent } from './components/add-customer/add-customer.component';
import { CardViewComponent } from './components/card-view/card-view.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { DemoComponent } from './components/demo/demo.component';
import { DocumentationComponent } from './components/documentation/documentation.component';
import { ListViewComponent } from './components/list-view/list-view.component';
import { LoginComponent } from './components/login/login.component';
import { OrderComponent } from './components/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'about',
    component: AboutComponent,
    children:[
      {path:'demo',component: DemoComponent},
      {path:'documentation',component:DocumentationComponent}
    ]
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: 'customer',
    component: CustomerListComponent,
    children:[
      {path:'cardview',component: CardViewComponent},
      {path:'listview',component: ListViewComponent},
      {path:'newcustomer',component:AddCustomerComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
