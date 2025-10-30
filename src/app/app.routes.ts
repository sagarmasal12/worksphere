import { Routes } from '@angular/router';
import { App } from './app';
import { EmployeeForm } from './pages/employee-form/employee-form';

export const routes: Routes = [
    {
        path:'',
        component:App
    },
    {
        path:'Employee-Form',
        component:EmployeeForm
    }
];
