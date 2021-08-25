import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveBook(book) {
      try {
        await this.get("dataService").createBook(book);
        this.get('model').set('name', book.name);
        this.get('model').set('author', book.author);
        this.get('model').set('pages', book.pages)
        this.get('model').set('descURL', book.descURL)
        this.get('model').set('thumbnailURL', book.thumbnailURL)
        this.get('model').set('tags', book.tags)

        this.transitionToRoute('book.index');
       }
       catch(e){
         this.send('error', new Error(e));
       }
    },
  }
});