import {Component, Output, EventEmitter} from '@angular/core';
import { Site }    from './site.model';
import { SiteService } from "./site.service";

@Component({
    selector: 'site-form',
    templateUrl: './site-form.component.html'
})
export class SiteFormComponent {
    @Output() onAdded = new EventEmitter<Site>();
    errorMessage: string;

    constructor(private siteService: SiteService) {
    }

    categories = ['Computer Science', '.Net',
        'Web Development', 'Angular', 'Agile'];

    model = new Site('', '', 'http://', this.categories[0], -1);

    onSubmit() {
         this.siteService.postSite(this.model)
             .subscribe(
                 site  => {
                    this.onAdded.emit(site);
                    this.newSite();
                 },
                 error =>  this.errorMessage = <any>error);
     }

    newSite() {
        this.model = new Site('', '', 'http://', this.categories[0], -1);
    }

    // TODO: Remove this when we're done
    get diagnostic() { return JSON.stringify(this.model); }
}
