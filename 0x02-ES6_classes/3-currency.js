/* Implement a class named Currency:
 * - Constructor attributes: code (String), name (String)
 * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
 * Implement a getter and setter for each attribute.
 * Implement a method named displayFullCurrency that will return the attributes in the following format name (code).
 */

export default class Currency {
    constructor(code, name) {
      this.code = code;
      this.name = name;
    }
  
    /**
     * @param {String} code
     */
    set code(code) {
      if (typeof code !== 'string') {
        throw new TypeError('Code must be a String');
      }
      this._code = code;
    }
  
    get code() {
      return this._code;
    }
  
    /**
     * @param {String} name
     */
    set name(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a String');
      }
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    displayFullCurrency() {
      return `${this.name} (${this.code})`;
    }
}