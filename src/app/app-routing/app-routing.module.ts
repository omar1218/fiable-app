import { NgModule } from '@angular/core';
import { RouterModule , Routes } from '@angular/router';

import { AboutComponent } from '../components/about/about.component';
import { BlogComponent } from '../components/blog/blog.component';
import { HomeComponent } from '../components/home/home.component';
import { PlaceholderComponent } from '../components/placeholder/placeholder.component';
import { UserDetailsComponent } from '../components/user-details/user-details.component';
import { UsersComponent } from '../components/users/users.component';
import { AuthGuard } from '../guards/auth/auth.guard';


const appRoutes : Routes = [
  { path : 'home' , component:HomeComponent} ,
  { path : 'about' , component:AboutComponent} ,
  { path : 'blog' , component:BlogComponent , canActivate: [AuthGuard]} ,
  { path : 'users' , 
        component:UsersComponent , 
        canActivateChild:[AuthGuard],
        children:[
          { path : ':id' , component:UserDetailsComponent},
          { path :'' ,component:PlaceholderComponent }
      ] 
  },
  { path : '**' , redirectTo:('/home'),pathMatch:'full'}

];

@NgModule({
  declarations: [],
  providers: [AuthGuard],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
