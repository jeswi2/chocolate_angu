import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OrderComponent } from './order/order.component';
import { PaymentComponent } from './payment/payment.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes:Routes=[
  {
    path:"",component:LoginComponent
  },
  {
path:"home",component:HomeComponent
  },
  {
    path:"gallery",component:GalleryComponent
      },
      {
        path:"order",component:OrderComponent
          },
          {
            path:"payment",component:PaymentComponent
              },
              {
                path:"contact",component:ContactComponent
              },
              
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    GalleryComponent,
    OrderComponent,
    PaymentComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
