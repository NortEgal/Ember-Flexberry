import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
  dataService: service('data'),
  router: service(),
  actions: {
    async deleteSpeaker(speaker) {
      try {
        await this.get('dataService').deleteSpeaker(speaker);
        //this.transitionToRoute('speaker.index');
        this.get('router').transitionTo('speaker.index')
      }
      catch (e) {
        this.send(e, new Error('Connection failed'));
      }
    }
  }
});