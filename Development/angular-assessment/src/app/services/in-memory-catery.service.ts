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
        { code: 1,
        description: 'Kitchen Items' },
        { code: 2,
           description: 'Cosmetics' },
        { code: 3,
           description: 'Cleaning' },
        { code: 4,
           description: 'Toiletries' },
        { code: 5,
           description: 'Clothing' },
        { code: 6, description: 'Fruits and Veg'
       },
       
      ];
      return {croceries};
    }

}

