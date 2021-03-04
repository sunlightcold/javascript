export function useStrictPersonalInfo(personalInfo, descriptor) {
  if (!Array.isArray(personalInfo)) {
    throw new TypeError(`data is not array`);
  }

  return personalInfo.map((item) => defineObject(item, descriptor));
}

export function defineObject(data, descriptor) {
  let _obj = new ConstructObject();

  for (const key in descriptor) {
    if (Object.hasOwnProperty.call(descriptor, key)) {
      Object.defineProperty(_obj, key, {
        ...descriptor[key],
        value: data[key],
      });
    }
  }

  return _obj;
}

function ConstructObject() {
  for (const key in ConstructObject.prototype) {
    Object.defineProperty(ConstructObject.prototype, key, {
      configurable: false,
      writable: false,
      enumerable: false,
    });
  }
}

ConstructObject.prototype.setPropertyDesc = function (
  property,
  descriptor,
  value
) {
  Object.defineProperty(this, property, {
    [descriptor]: value,
  });
};
