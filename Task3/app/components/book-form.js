import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e){
      e.preventDefault();
      this.onsubmit({
          id: this.get('id'),
          name: this.get('name'),
          author: this.get('author'),
          pages: this.get('pages'),
          descURL: this.get('descURL'),
          thumbnailURL: this.get('thumbnailURL'),
          tags: this.get('tags').toString().split(','),
      });
    },
    cancelForm(e){
      e.preventDefault();
      this.transitionToRoute('book.index')
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      id: this.get('book.id') ? this.get('book.id') : undefined,
      name: this.get('book.name'),
      author: this.get('book.author'),
      pages: this.get('book.pages'),
      descURL: this.get('book.descURL'),
      thumbnailURL: this.get('book.thumbnailURL'),
      tags: this.get('book.tags'),
    });
  }
});