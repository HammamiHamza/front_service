import { Routes } from '@angular/router';
import { LivreComponent } from './components/livre/livre.component';
import { CreateOrUpdateLivreComponent } from './components/create-or-update-livre/create-or-update-livre.component';

export const routes: Routes = [
    {
        path :'livre', component: LivreComponent,
    },
    {
        path:'manage-livre' , component : CreateOrUpdateLivreComponent
    }
];
