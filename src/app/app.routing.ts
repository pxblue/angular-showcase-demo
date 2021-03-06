import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { KitchenSinkComponent } from './kitchen-sink/kitchen-sink.component';
import { TimelineComponent } from './timeline/timeline.component';
import { TypographyComponent } from './typography/typography.component'; // CLI imports router

const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'timeline', component: TimelineComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'kitchen-sink', component: KitchenSinkComponent },
    { path: 'typography', component: TypographyComponent },
];
// configures NgModule imports and exports
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
