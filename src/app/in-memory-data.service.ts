import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let sites = [
      { id: 1, author: 'Scott Hanselman', url: 'http://www.hanselman.com/', category: '.Net', placement: 1 },
      { id: 2, author: 'John Papa', url: 'https://johnpapa.net/', category: 'Angular', placement: 2 },
      { id: 3, author: 'Martin Fowler', url: 'https://martinfowler.com/bliki/', category: 'Computer Science', placement: 3 }
    ];
    return {sites};
  }
}