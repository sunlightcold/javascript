import { useStrictPersonalInfo } from './defineProperty.js';
import { personalInfo } from './personalInfo.js';
import { personalDescriptor } from './personalDescriptor.js';

(() => {
  const newPersonalInfo = useStrictPersonalInfo(
    personalInfo,
    personalDescriptor
  );
  console.log(newPersonalInfo[0]);
  newPersonalInfo[0].job = '公务员';
  // newPersonalInfo[0].setPropertyDesc('publicKey', 'enumerable', true);
  newPersonalInfo[0].setPropertyDesc('name', 'writable', true);
  newPersonalInfo[0].name = '666';
  console.log(newPersonalInfo[0]);
  for (const key in newPersonalInfo[0]) {
    console.log(key);
  }
})();
