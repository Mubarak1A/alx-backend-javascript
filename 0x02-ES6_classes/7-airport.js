/* Implement a class named Airport:
 * Constructor attributes: name (String), code (String)
 * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
 * The default string description of the class should return the airport code (example below).
 */

export default class Airport {
    constructor(name, code) {
      this.name = name;
      this.code = code;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      this._name = value;
    }
  
    get code() {
      return this._code;
    }
  
    set code(value) {
      this._code = value;
    }
  
    get [Symbol.toStringTag]() {
      return this._code;
    }
}
