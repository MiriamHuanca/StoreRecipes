import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {GenerarJspdfComponent} from './generar-jspdf.component';

@NgModule({
  declarations: [GenerarJspdfComponent],
  imports: [
    CommonModule,
    FormsModule,
    // module of pdf
    PdfViewerModule,
    RouterModule.forChild([{path: 'pdf', component: GenerarJspdfComponent}]),
    SharedModule
  ]
})
export class GenerarJspdfModule {
}
