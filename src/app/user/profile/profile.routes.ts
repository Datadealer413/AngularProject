// Angular
import {Routes} from '@angular/router';
// Application
import {ProfileComponent} from './profile.component';
import {UserAuthGuard} from '../../guards/user-auth.guard';

export const PROFILE_ROUTES: Routes = [
    {
        path: '',
        component: ProfileComponent,
        canActivate: [
            UserAuthGuard
        ]
    }
];
