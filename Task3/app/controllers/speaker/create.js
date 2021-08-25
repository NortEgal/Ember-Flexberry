import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  dataService: service('data'),
  actions: {
    async saveSpeaker(speaker) {
      await this.get("dataService").createSpeaker(speaker);
      this.get('model').set('firstName', speaker.firstName);
      this.get('model').set('lastName', speaker.lastName);
      this.get('model').set('patronymic', speaker.patronymic);
      this.transitionToRoute('speaker.index');
    },
  }
});
