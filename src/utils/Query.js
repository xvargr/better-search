class Query {
  constructor(initialQuery) {
    this.rawQuery = initialQuery || "";
  }

  getRawQuery() {
    return this.rawQuery;
  }

  setRawQuery(input) {
    this.rawQuery = input;
  }
}

export default Query;
