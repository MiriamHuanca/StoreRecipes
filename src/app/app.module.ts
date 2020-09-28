import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {DropdownDirective} from './shared/dropdown.directive';
import {GegerarPdfComponent} from './gegerar-pdf/gegerar-pdf.component';
import {GenerarJspdfComponent} from './generar-jspdf/generar-jspdf.component';
import {PdfViewerModule} from 'ng2-pdf-viewer';

import {ShoppingListService} from './shopping-list/shopping-list.service';
import {RecipeService} from './recipes/recipe.service';
import {AuthInterceptorService} from './auth/auth-interceptor.service';

import {AuthComponent} from './auth/auth.component';
import {LoadingSpinnerComponent} from './shared/loading-spinner/loading-spinner.component';
import {AlertComponent} from './shared/alert/alert.component';
import {PlaceholderDirective} from './shared/placeholder/placeholder.directive';
import {RecipesModule} from './recipes/recipes.module';
import {ShoppingListModule} from './shopping-list/shopping-list.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropdownDirective,
    // component of pdf
    GegerarPdfComponent,
    GenerarJspdfComponent,
    AuthComponent,
    // loading
    LoadingSpinnerComponent,
    // alert
    AlertComponent,
    PlaceholderDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // for reactive form
    ReactiveFormsModule,
    // for service
    HttpClientModule,
    AppRoutingModule,
    // module of pdf
    PdfViewerModule,
    RecipesModule,
    ShoppingListModule,
  ],
  providers: [
    // the service is correctly here
    ShoppingListService,
    RecipeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    AlertComponent
  ]
})
export class AppModule {
}
