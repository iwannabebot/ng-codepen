import { NgModule } from '@angular/core';
import { NgCodepenComponent } from './components';
import { NgCodepenService } from './services';
@NgModule({
  providers: [
    NgCodepenService,
  ],
  declarations: [
    NgCodepenComponent
  ],
  exports: [
    NgCodepenComponent,
  ]
})
export class NgCodepenModule {
}
