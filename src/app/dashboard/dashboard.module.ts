import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, DemoComponent],
  exports: [DemoComponent]
})
export class DashboardModule {}
