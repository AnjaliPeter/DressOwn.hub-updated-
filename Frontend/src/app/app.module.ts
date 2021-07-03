import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { Ng5SliderModule } from 'ng5-slider';
import { NgxSliderModule } from '@angular-slider/ngx-slider';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { BodyComponent } from './body/body.component';
import { HomeComponent } from './home/home.component';
import { DesignComponent } from './design/design.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HelpComponent } from './help/help.component';
import { StitchComponent } from './stitch/stitch.component';
import { CreateComponent } from './create/create.component';
import { DesignService } from './design.service';
import { PrototypeService } from './prototype.service';
import { StitchService } from './stitch.service';
import { SelectComponent } from './select/select.component';
import { SelectbarComponent } from './selectbar/selectbar.component';
import { CreatebarComponent } from './createbar/createbar.component';
import { SingledesignComponent } from './singledesign/singledesign.component';
import { CategoryComponent } from './category/category.component';
import { SelecthelpComponent } from './selecthelp/selecthelp.component';
import { CreatehelpComponent } from './createhelp/createhelp.component';
import { SignuphelpComponent } from './signuphelp/signuphelp.component';
import { AccepthelpComponent } from './accepthelp/accepthelp.component';
import { PrototypeComponent } from './prototype/prototype.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WelcomeComponent,
    FooterComponent,
    SigninComponent,
    SignupComponent,
    BodyComponent,
    HomeComponent,
    DesignComponent,
    ContactusComponent,
    HelpComponent,
    StitchComponent,
    CreateComponent,
    SelectComponent,
    SelectbarComponent,
    CreatebarComponent,
    SingledesignComponent,
    CategoryComponent,
    SelecthelpComponent,
    CreatehelpComponent,
    SignuphelpComponent,
    AccepthelpComponent,
    PrototypeComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgbModule,
    OwlModule,
    CarouselModule,
    HttpClientModule,
    FormsModule,
    DragDropModule,
    Ng2ImgMaxModule,
    Ng5SliderModule,
    NgxSliderModule
  ],
  providers: [DesignService,
              PrototypeService,
              StitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
