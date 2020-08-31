export default class Validator {
  static validateUsername(name) {
    if (name.match(/\d{4,}/) !== null) {
      return false;
    }
    return name.match(/^[a-z][-_\da-z]+[a-z]$/i) !== null;
  }

  static getValidatedPhone(phone) {
    const validPhone = phone.replace(/[^\d]/g, '');
    if (validPhone.length === 10) {
      return `+7${validPhone}`;
    }
    if (validPhone.length === 11 && validPhone.substring(0, 1) === '8') {
      return `+7${validPhone.substring(1)}`;
    }
    return `+${validPhone}`;
  }
}
