import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DemoComponent } from './demo/demo.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

@NgModule({
  imports: [CommonModule, DashboardRoutingModule],
  declarations: [DashboardComponent, DemoComponent, Page1Component, Page2Component],
  exports: [DemoComponent]
})
export class DashboardModule {}
