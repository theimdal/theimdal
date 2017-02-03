import {Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions, ResponseContentType} from '@angular/http';
import {Site} from './site.model';
import {Observable}     from 'rxjs/Observable';
import { SITES } from './mock-sites';

@Injectable()
export class SiteService {

    // private sitesUrl = process.env.site_SERVICE_HOST + '/sites';
    private sitesUrl = 'app/sites';

    constructor(private http: Http ) {}

    getSites(): Observable<Site[]> {
        return this.http.get(this.sitesUrl)
          .map(this.extractSites)
          .catch(this.handleError);
    }

    // getSite(id: string): Observable<Site> {
    //     return this.http.get(this.installationsUrl + '/' + id)
    //         .map(this.exstractInstallation)
    //         .catch(this.handleError);
    // }

    // deleteSite(id: string): Observable<Site> {
    //   return this.http.delete(this.installationsUrl + '/' + id)
    //     .map(this.extractData)
    //     .catch(this.handleError);
    // }

    private extractSites(response: Response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
      }

      let body = response.json();
      return body.data || [];

    }

    private extractInstallations(response: Response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
      }

      let data = response.json() || [];
      for (let installation of data ) {
        installation.created = new Date(installation.created);
        installation.last_updated = new Date(installation.last_updated);
        installation.last_message_exchange = new Date(installation.last_message_exchange);
        if(installation.hc_party.certificate_info) {
            installation.hc_party.certificate_info.auth_certificate.expiration_date =
                new Date(installation.hc_party.certificate_info.auth_certificate.expiration_date);
            installation.hc_party.certificate_info.sign_certificate.expiration_date =
                new Date(installation.hc_party.certificate_info.sign_certificate.expiration_date);
        }
      }

      return data;
    }

    private extractData(response: Response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
      }

      return response.json() || [];
    }

    private handleError (error: Response | any) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        let errMsg: string;
        if(error instanceof Response) {
          const body = error.json() || '';
          const err = body.error || JSON.stringify(body);
          errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
          errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
