import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { TransformPipe } from './transform.pipe';
import { ParentComponent } from './parent/parent.component';
import { ChiledComponent } from './chiled/chiled.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TransformPipe,
    ParentComponent,
    ChiledComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
