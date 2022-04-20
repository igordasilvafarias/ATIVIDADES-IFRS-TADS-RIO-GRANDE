import { Criteria } from "./Criteria";

export class QueryObject {
  criteria: Criteria[] = [];

  addCriteria(criteria: Criteria): QueryObject {
    this.criteria.push(criteria);
    return this;
  }

  genWhere() {
    const _criteria = this.criteria.map((c) => c.generateSql()).join(" AND ");
    return `WHERE ${_criteria}`;
  }
}

