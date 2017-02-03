import { Component, OnInit, AfterContentInit} from '@angular/core';
import { Router } from '@angular/router';
import { Site } from './site.model';
import { SiteService } from './site.service';

@Component({
    selector: 'theimdal-home',
    templateUrl: 'home.component.html',
    styleUrls: ['home.component.less']
})
export class HomeComponent implements OnInit, AfterContentInit {
    errorMessage: string;
    sites: Site[];

    constructor(private router: Router,
                private siteService: SiteService) {
    }

    ngOnInit() {
        this.refreshSites();
    }

    refreshSites() {        
        this.siteService.getSites()
          .subscribe(
            sites => { 
              this.sites = sites;
            },
            error => this.errorMessage = <any>error);
      }

    

    ngAfterContentInit() {
      // Do nothing yet
    }

    onSelect(siteId: any) {
        // this.router.navigate(['/detail', installationId]);
    }

    // delete(installationId: any) {
    //   this.installationService.deleteInstallation(installationId)
    //     .subscribe(
    //       response => {
    //         //this.infoMessage = JSON.stringify(response);
    //         this.refreshInstallations();
    //       },
    //       error => this.errorMessage = <any>error);
    // }    

}
