class Query {
  constructor(initialQuery) {
    this.rawQuery = initialQuery || "";
    this.exact = [];
    this.exclude = [];
    this.site = [];
    this.range = {
      from: "",
      to: "",
    };
  }

  getRawQuery() {
    return this.rawQuery;
  }

  setRawQuery(input) {
    console.log("query raw is now", input);
    this.rawQuery = input;
  }
}

export default Query;
