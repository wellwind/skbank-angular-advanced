import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { Page1Component } from './dashboard/page1/page1.component';
import { Page2Component } from './dashboard/page2/page2.component';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TablesComponent } from './tables/tables.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        // component: DashboardComponent
        redirectTo: 'dashboard', // => 轉址到 dashboard
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'dashboard/page1',
        component: Page1Component
      },
      {
        path: 'dashboard/page2',
        component: Page2Component
      },
      {
        path: 'tables',
        component: TablesComponent
      },
      {
        path: 'tables/:id/:title',
        component: TablesComponent
      },
      {
        path: 'test',
        component: TestComponent
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // enableTracing: true,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
