import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorMessageComponent } from './component/error-message/error-message.component';
import { FormDebugComponent } from './component/form-debug/form-debug.component';
import { InputFileComponent } from './component/input-file/input-file.component';
import { ToolbarComponent } from './component/toolbar/toolbar.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    ErrorMessageComponent,
    FormDebugComponent,
    InputFileComponent,
    ToolbarComponent,
  ],
  imports: [IonicModule, CommonModule],
  exports: [
    ErrorMessageComponent,
    FormDebugComponent,
    InputFileComponent,
    ToolbarComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
