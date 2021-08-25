import { helper } from '@ember/component/helper';
import { htmlSafe } from '@ember/string';

export function getAuthorName(params/*, hash*/) {
  let [firstName, lastName, patronymic] = params;
  //return htmlSafe(`<strong>${lastName}</strong> ${firstName}`);
  return htmlSafe(`${lastName} ${firstName} ${patronymic}`);
}

export default helper(getAuthorName);
