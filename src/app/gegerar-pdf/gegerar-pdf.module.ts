import {NgModule} from '@angular/core';
import {GegerarPdfComponent} from './gegerar-pdf.component';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {SharedModule} from '../shared/shared.module';
import {PdfViewerModule} from 'ng2-pdf-viewer';

@NgModule({
  declarations: [GegerarPdfComponent],
  imports: [
    CommonModule,
    FormsModule,
    // module of pdf
    PdfViewerModule,
    RouterModule.forChild([{path: 'pdf', component: GegerarPdfComponent}]),
    SharedModule
  ]
})
export class GegerarPdfModule {
}
