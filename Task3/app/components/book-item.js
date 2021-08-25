import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
    dataService: service('data'),
    router: service(),
    actions: {
      async deleteBook(book) {
        try {
          await this.get('dataService').deleteBook(book);
          this.get('router').transitionTo('book.index')
        }
        catch (e) {
          this.send(e, new Error('Connection failed'));
        }
      }
    }
});
