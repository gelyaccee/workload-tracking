import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TransactionComponent } from './transaction/transaction.component';
import { FileComponent } from './file/file.component';
import { ManpowerComponent } from './file/manpower/manpower.component';
import { ProjectComponent } from './file/project/project.component';
import { ProjectManpowerComponent } from './file/project-manpower/project-manpower.component';
import { ProjectManpowerUpdateComponent } from './transaction/project-manpower-update/project-manpower-update.component';
import { ProjectManHourUpdateComponent } from './transaction/project-man-hour-update/project-man-hour-update.component';
import { ReportsComponent } from './reports/reports.component';
import { ToolsComponent } from './tools/tools.component';

const routes:Routes = [
  {path:'',component:LoginComponent },
  {path:'home',component:HomeComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'file',component:FileComponent},
  {path:'file/manpower',component:ManpowerComponent},
  {path:'file/project',component:ProjectComponent},
  {path:'file/project-manpower',component:ProjectManpowerComponent},
  {path:'transaction',component:TransactionComponent},
  {path:'transaction/project-manpower-update',component:ProjectManpowerUpdateComponent},
  {path:'transaction/project-man-hour-update',component:ProjectManHourUpdateComponent}


]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavbarComponent,
    TransactionComponent,
    FileComponent,
    ManpowerComponent,
    ProjectComponent,
    ProjectManpowerComponent,
    TransactionComponent,
    ProjectManpowerUpdateComponent,
    ProjectManHourUpdateComponent,
    ReportsComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
