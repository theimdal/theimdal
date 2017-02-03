// import { Component, OnInit} from '@angular/core';
// import {Installation} from '../installations/installation.model';
// import {InstallationService} from '../installations/installation.service';
//
// @Component({
//     selector: 'csc-dashboard',
//     templateUrl: 'app/dashboard/dashboard.component.html',
//     styleUrls: ['app/dashboard/dashboard.component.css']
// })
// export class DashboardComponent implements OnInit {
//
//     installations: Installation[] = [];
//     errorMessage: String;
//
//     constructor(
//         private _installationService: InstallationService,
//         private _router: Router) {
//     }
//
//     ngOnInit() {
//         this._installationService.getLastUpdatedInstallations()
//             .subscribe(
//                 installations => this.installations = installations,
//                 error => this.errorMessage = <any>error);
//     }
//
//     gotoDetail(installation: Installation) {
//         let link = ['InstallationDetail', { id: installation._id }];
//         this._router.navigate(link);
//     }
//
// }
