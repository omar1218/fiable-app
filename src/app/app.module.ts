import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FiableTraineeListComponent } from './fiable-trainee-list/fiable-trainee-list.component';
import { StrIntComponent } from './str-int/str-int.component';
import { HeaderComponent } from './components/header/header.component' ;
import { TransformDirective } from './transform.directive';
import { SafePipe } from './pipes/safe/safe.pipe';
import { PropetyBindComponent } from './propety-bind/propety-bind.component';
import { EventBindComponent } from './event-bind/event-bind.component';
import { CounterComponent } from './counter/counter.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { BlogComponent } from './components/blog/blog.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserComponent } from './components/user/user.component';
import { PlaceholderComponent } from './components/placeholder/placeholder.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FiableTraineeListComponent,
    StrIntComponent,
    HeaderComponent,
    TransformDirective,
    SafePipe,
    PropetyBindComponent,
    EventBindComponent,
    CounterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    BlogComponent,
    UsersComponent,
    UserDetailsComponent,
    UserComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
