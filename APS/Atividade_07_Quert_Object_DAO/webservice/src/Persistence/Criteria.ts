import { fileURLToPath } from "url";

export class Criteria {
  operator: string;
  field: string;
  value: string;
  constructor(operator: string, field: string, value: any) {
    this.operator = operator;
    this.field = field;
    this.value = value;
    return this;
  }

  static equals(field: string, value: any): Criteria {
    return new Criteria(Operator.equal, field, value);
  }

  static greaterThan(field: string, value: any): Criteria {
    return new Criteria(Operator.greater, field, value);
  }

  static lessThan(field: string, value: any): Criteria {
    return new Criteria(Operator.less, field, value);
  }

  generateSql(): string {
    return `${this.field} ${this.operator} ${typeof this.value === "string" ? `'${this.value}'` : this.value
      }`;
  }
}

export enum Operator {
  equal = '=',
  notEqual = '<>',
  greater = ">",
  greaterOrEqual = ">=",
  less = "<",
  lessOrEqual = "<=",
}
