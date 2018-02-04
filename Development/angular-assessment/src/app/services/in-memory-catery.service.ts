import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import { Observable } from 'rxjs';

import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable()
export class InMemoryCategoryService  implements InMemoryDbService { 

 
    /**
     * Retrieve list of crocery category
     */
    createDb() {
      const croceries = [
        { id: 1,
        description: 'Kitchen Items' },
        { id: 2,
           description: 'Cosmetics' },
        { id: 3,
           description: 'Cleaning' },
        { id: 4,
           description: 'Toiletries' },
        { id: 5,
           description: 'Clothing' },
        { id: 6, description: 'Fruits and Veg'
       },
       
      ];
      return {croceries};
    }

}

