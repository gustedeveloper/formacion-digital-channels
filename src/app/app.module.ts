import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Ex1ItemListComponent } from './features/ex1-item-list/ex1-item-list.component';
import { ItemComponent } from './features/ex1-item-list/components/item/item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { Ex2ReactiveFormComponent } from './features/ex2-reactive-form/ex2-reactive-form.component';
import { Ex3RoutingComponent } from './features/ex3-routing/ex3-routing.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HeaderComponent } from './layout/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormInputComponent } from './shared/form-input/form-input.component';
import { FormSelectComponent } from './shared/form-select/form-select.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { LoginComponent } from './features/ex3-routing/components/login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    Ex1ItemListComponent,
    ItemComponent,
    HomeComponent,
    Ex2ReactiveFormComponent,
    Ex3RoutingComponent,
    LoadingComponent,
    HeaderComponent,
    FormInputComponent,
    FormSelectComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatTooltipModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
