import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ModalComponent } from './tools/modal/modal.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FileComponent } from './file/file.component';
import { ManpowerComponent } from './file/manpower/manpower.component';
import { ProjectComponent } from './file/project/project.component';
import { ProjectManpowerComponent } from './file/project-manpower/project-manpower.component';
import { ProjectManpowerUpdateComponent } from './transaction/project-manpower-update/project-manpower-update.component';
import { ProjectManHourUpdateComponent } from './transaction/project-man-hour-update/project-man-hour-update.component';
import { ReportsComponent } from './reports/reports.component';
import { ToolsComponent } from './tools/tools.component';
import { DefineReportsComponent } from './reports/define-reports/define-reports.component';
import { RunReportsComponent } from './reports/run-reports/run-reports.component';
import { BackupDataComponent } from './tools/backup-data/backup-data.component';
import { RestoreDataComponent } from './tools/restore-data/restore-data.component';
import { SystemSecurityComponent } from './tools/system-security/system-security.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const routes:Routes = [
  {path:'',component:LoginComponent },
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


]

@NgModule({
  declarations: [
    AppComponent,
    ModalComponent,
    HomeComponent,
    LoginComponent,
    TransactionComponent,
    FileComponent,
    ManpowerComponent,
    ProjectComponent,
    ProjectManpowerComponent,
    TransactionComponent,
    ProjectManpowerUpdateComponent,
    ProjectManHourUpdateComponent,
    ReportsComponent,
    ToolsComponent,
    DefineReportsComponent,
    RunReportsComponent,
    BackupDataComponent,
    RestoreDataComponent,
    SystemSecurityComponent,
    
  ],
  imports: [
    BrowserModule,
   
    RouterModule.forRoot(routes),
         NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
