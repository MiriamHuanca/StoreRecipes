import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {GegerarPdfComponent} from './gegerar-pdf/gegerar-pdf.component';
import {GenerarJspdfComponent} from './generar-jspdf/generar-jspdf.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {AuthComponent} from './auth/auth.component';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';
import {SharedModule} from './shared/shared.module';
import {CoreModule} from './core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AuthComponent,
    // component of pdf
    GegerarPdfComponent,
    GenerarJspdfComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // for reactive form
    ReactiveFormsModule,
    // for service
    HttpClientModule,
    AppRoutingModule,
    RecipesModule,
    ShoppingListModule,
    SharedModule,
    CoreModule,
    // module of pdf
    PdfViewerModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
