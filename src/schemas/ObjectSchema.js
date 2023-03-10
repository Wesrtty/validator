import Schema from '../Schema.js';

class ObjectSchema extends Schema {
  shape(schemas) {
    super.addOperation(schemas);
    return this;
  }

  isValid(fields) {
    if (!fields) return true;

    const [operations] = this.getOperations();
    return Object
      .entries(fields)
      .every(([key, value]) => operations[key].isValid(value));
  }
}

export default ObjectSchema;
