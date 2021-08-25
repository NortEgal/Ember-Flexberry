import Component from '@ember/component';

export default Component.extend({
  actions: {
    submitForm(e){
      e.preventDefault();
      this.onsubmit({
          id: this.get('id'),
          firstName: this.get('firstName'),
          lastName: this.get('lastName'),
          patronymic: this.get('patronymic')
      });
    },
    cancelForm(e){
      e.preventDefault();
      this.transitionToRoute('speaker.index')
    }
  },

  didReceiveAttrs() {
    this._super(...arguments);
    this.setProperties({
      id: this.get('speaker.id') ? this.get('speaker.id') : undefined,
      firstName: this.get('speaker.firstName'),
      lastName: this.get('speaker.lastName'),
      patronymic: this.get('speaker.patronymic')
    });
  }
});