import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import{MaterialExampleModule} from './material.module'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SelectorComponent } from './Components/selector/selector.component';
import { HeaderComponent } from './Components/header/header.component';
import { ListadoComponent } from './Components/listado/listado.component';
import { ListadoService } from './Components/listado/listado.service';

@NgModule({
  declarations: [
    AppComponent,
    SelectorComponent,
    HeaderComponent,
    ListadoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialExampleModule
  ],
  providers: [ListadoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
