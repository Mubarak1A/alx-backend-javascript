/* Implement a class named HolbertonCourse:
 * Constructor attributes: name (String), length (Number), students (array of Strings)
 * Make sure to verify the type of attributes during object creation
 * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
 * Implement a getter and setter for each attribute.
 */

class HolbertonCourse {
    constructor(name, length, students) {
      this.name = name;
      this.length = length;
      this.students = students;
    }
  
    /**
     * @param {String} name
     */
    set name(name) {
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }
      this._name = name;
    }
  
    get name() {
      return this._name;
    }
  
    /**
     * @param {Number} length
     */
    set length(length) {
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }
      this._length = length;
    }
  
    get length() {
      return this._length;
    }
  
    /**
     * @param {Array} students
     */
    set students(students) {
      if (students instanceof Array) {
        this._students = students;
      } else {
        throw new TypeError('Students must be an Array');
      }
    }
  
    get students() {
      return this._students;
    }
  }
  
  export default HolbertonCourse;