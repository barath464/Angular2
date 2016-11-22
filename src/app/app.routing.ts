import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./admin.component";
import {LoginComponent} from "./login.component";
import {HomeComponent} from "./home.component";

const MyRouter : Routes =[
  {path : '',component:HomeComponent},
  {path : 'login',component :LoginComponent},
  {path:'admin',component:AdminComponent},
];
export const MyRoute = RouterModule.forRoot(MyRouter);
