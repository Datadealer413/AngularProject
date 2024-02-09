// Application
import { FileShareDashboardComponent } from './file-share-dashboard.component';
import { UserAuthGuard } from '../../../guards/user-auth.guard';
import { CompanyUserAuthGuard } from '../../../guards/company-user-auth.guard';
export const FILE_SHARE_DASHBOARD_ROUTES = [
    {
        path: '',
        component: FileShareDashboardComponent,
        canActivate: [
            UserAuthGuard,
            CompanyUserAuthGuard
        ]
    }
];
//# sourceMappingURL=file-share-dashboard.routes.js.map