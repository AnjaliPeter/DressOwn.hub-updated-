import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { CreateComponent } from './create/create.component';
import { DesignComponent } from './design/design.component';
import { HelpComponent } from './help/help.component';
import { HomeComponent } from './home/home.component';
import { SelectComponent } from './select/select.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StitchComponent } from './stitch/stitch.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SelectbarComponent } from './selectbar/selectbar.component';
import { CreatebarComponent } from './createbar/createbar.component';
import { SingledesignComponent } from './singledesign/singledesign.component';
import { CategoryComponent } from './category/category.component';
import { SignuphelpComponent } from './signuphelp/signuphelp.component';
import { SelecthelpComponent } from './selecthelp/selecthelp.component';
import { CreatehelpComponent } from './createhelp/createhelp.component';
import { AccepthelpComponent } from './accepthelp/accepthelp.component';
import { PrototypeComponent } from './prototype/prototype.component';



const routes: Routes = [
  {path:"",component:WelcomeComponent},
  {path:"signup",component:SignupComponent},
  {path:"signin",component:SigninComponent},
  {path:"home",component:HomeComponent},
  {path:"design",component:DesignComponent,
    // children:[
    //   {path:"",component:SelectbarComponent,outlet:"sidebar"},
    //   {path:"",component:SelectComponent,outlet:"designarea"},
    //   {path:"create",component:CreatebarComponent,outlet:"sidebar"},
    //   {path:"create",component:CreateComponent,outlet:"designarea"}
    // ]
    children:[
      {path:"",component:SelectComponent},
      {path:"select/:cat/:col/:min/:max",component:CategoryComponent},
      {path:"create",component:CreateComponent},
      // {path:"create",component:PrototypeComponent,outlet:"protoarea"},
      //   children:[
      //     {path:"",component:PrototypeComponent,outlet:"protoarea"},
      //     // {path:"dresses",component:SigninComponent}
      //   ]
      // },
      {path:":proto",component:PrototypeComponent,outlet:"protoarea"}
    ]
  },
  {path:"singledesign/:id",component:SingledesignComponent},
  {path:"stitch",component:StitchComponent},
  {path:"contactus",component:ContactusComponent},
  {path:"help",component:HelpComponent,
    children:[
      {path:"",component:SignuphelpComponent},
      {path:"signuphelp",component:SignuphelpComponent},
      {path:"selecthelp",component:SelecthelpComponent},  
      {path:"createhelp",component:CreatehelpComponent},
      {path:"accepthelp",component:AccepthelpComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
