import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ManpowerComponent } from './file/manpower/manpower.component';
import { ProjectComponent } from './file/project/project.component';
import { ProjectManpowerComponent } from './file/project-manpower/project-manpower.component';
import { ProjectManpowerUpdateComponent } from './transaction/project-manpower-update/project-manpower-update.component';
import { ProjectManHourUpdateComponent } from './transaction/project-man-hour-update/project-man-hour-update.component';
import { DefineReportsComponent } from './reports/define-reports/define-reports.component';
import { RunReportsComponent } from './reports/run-reports/run-reports.component';
import { BackupDataComponent } from './tools/backup-data/backup-data.component';
import { RestoreDataComponent } from './tools/restore-data/restore-data.component';
import { SystemSecurityComponent } from './tools/system-security/system-security.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    {path:'home',component:HomeComponent},
    {path:'file/manpower',component:ManpowerComponent},
    {path:'file/project',component:ProjectComponent},
    {path:'file/project-manpower',component:ProjectManpowerComponent},
    {path:'transaction/project-manpower-update',component:ProjectManpowerUpdateComponent},
    {path:'transaction/project-man-hour-update',component:ProjectManHourUpdateComponent},
    {path:'reports/define-reports',component:DefineReportsComponent},
    {path:'reports/run-reports',component:RunReportsComponent},
    {path:'tools/backup-data',component:BackupDataComponent},
    {path:'tools/restore-data',component:RestoreDataComponent},
    {path:'tools/system-security',component:SystemSecurityComponent}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }