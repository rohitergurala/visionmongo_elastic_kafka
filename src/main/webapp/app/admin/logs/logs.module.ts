import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { VisionmongoelastickafkaSharedModule } from 'app/shared/shared.module';

import { LogsComponent } from './logs.component';

import { logsRoute } from './logs.route';

@NgModule({
  imports: [VisionmongoelastickafkaSharedModule, RouterModule.forChild([logsRoute])],
  declarations: [LogsComponent]
})
export class LogsModule {}
