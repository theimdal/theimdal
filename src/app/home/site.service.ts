import {Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Site} from './site.model';
import {Observable}     from 'rxjs/Observable';

@Injectable()
export class SiteService {

    private sitesUrl = process.env.THEIMDAL_API_HOST + '/site';

    constructor(private http: Http ) {}

    getSites(): Observable<Site[]> {
        return this.http.get(this.sitesUrl)
          .map(this.extractSites)
          .catch(this.handleError);
    }

    getSite(id: string): Observable<Site> {
        return this.http.get(this.sitesUrl + '/' + id)
            .map(this.extractSite)
            .catch(this.handleError);
    }

    postSite(site: Site): Observable<Site> {
        let headers = new Headers({ 'content-type': 'application/json'});
        let options = new RequestOptions({headers: headers });

        return this.http.post(this.sitesUrl, JSON.stringify(site), options)
            .map(this.extractSite)
            .catch(this.handleError);
    }

    deleteSite(id: string): Observable<Site> {
      return this.http.delete(this.sitesUrl + '/' + id)
        .map(this.extractSite)
        .catch(this.handleError);
    }

    private extractSites(response: Response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
      }

      let body = response.json();
      return body || [];

    }

    // private extractInstallations(response: Response) {
    //   if (response.status < 200 || response.status >= 300) {
    //     throw new Error('Bad response status: ' + response.status);
    //   }
    //
    //   let data = response.json() || [];
    //   for (let installation of data ) {
    //     installation.created = new Date(installation.created);
    //     installation.last_updated = new Date(installation.last_updated);
    //     installation.last_message_exchange = new Date(installation.last_message_exchange);
    //     if(installation.hc_party.certificate_info) {
    //         installation.hc_party.certificate_info.auth_certificate.expiration_date =
    //             new Date(installation.hc_party.certificate_info.auth_certificate.expiration_date);
    //         installation.hc_party.certificate_info.sign_certificate.expiration_date =
    //             new Date(installation.hc_party.certificate_info.sign_certificate.expiration_date);
    //     }
    //   }
    //
    //   return data;
    // }

    private extractData(response: Response) {
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Bad response status: ' + response.status);
      }

      return response.json() || [];
    }

    private extractSite(response: Response) {
        if (response.status < 200 || response.status >= 300) {
            throw new Error('Bad response status: ' + response.status);
        }

        let data = response.json();
        return data.site || {};
    }

    private handleError (error: Response | any) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.log(error);

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
