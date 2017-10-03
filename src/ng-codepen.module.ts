import { NgModule } from '@angular/core';
import { NgCodepenComponent } from './components';
import { NgCodepenService } from './services';
import { CustomSafePipe } from './pipes';
@NgModule({
  providers: [
    NgCodepenService,
  ],
  declarations: [
    NgCodepenComponent,
    CustomSafePipe
  ],
  exports: [
    NgCodepenComponent,
  ]
})
export class NgCodepenModule {
}
