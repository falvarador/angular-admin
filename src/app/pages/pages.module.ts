import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// External
import { ChartsModule } from 'ng2-charts';

// Modules
import { SharedModule } from '../shared/shared.module';

// Routes
import { PAGES_ROUTES } from './pages.routes';

// Temp
import { IncrementComponent } from '../components/increment/increment.component';
import { DoughnutChartComponent } from '../components/doughnut-chart/doughnut-chart.component';

// Components
import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graphics1Component } from './graphics1/graphics1.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesaComponent } from './promesa/promesa.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
        IncrementComponent,
        DoughnutChartComponent,
        AccountSettingsComponent,
        PromesaComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graphics1Component,
    ],
    imports: [
        SharedModule,
        FormsModule,
        ChartsModule,
        PAGES_ROUTES
    ]
})

export class PagesModule { }
