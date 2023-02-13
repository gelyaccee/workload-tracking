import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file/file.component';
import { TransactionComponent } from './transaction/transaction.component';
import { ReportsComponent } from './reports/reports.component';
import { ToolsComponent } from './tools/tools.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: '', component: LoginComponent},
    { path: 'file', component: FileComponent },
    { path: 'transaction', component: TransactionComponent },
    { path: 'reports', component: ReportsComponent },
    { path: 'tools', component: ToolsComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }