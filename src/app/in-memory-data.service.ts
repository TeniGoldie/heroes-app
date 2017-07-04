import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { id: 0,  name: 'Batman' },
            { id: 1, name: 'Superman' },
            { id: 2, name: 'WonderWoman' },
            { id: 3, name: 'Aquaman' },
            { id: 4, name: 'Ironman' },
            { id: 5, name: 'Spiderman' },
            { id: 6, name: 'Flash' },
            { id: 7, name: 'GreenArrow' },
            { id: 8, name: 'Shazam' },
            { id: 9, name: 'Atom' },
            { id: 10, name: 'GreenLantern' }
        ];
        return {heroes};
    }
}