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

  addExact(input) {
    // console.log("pushing to exact", input);
    this.exact.push(input);
  }

  removeExact(input) {
    console.log("removing from exact", input);

    const index = this.exact.findIndex(input);
    if (index === -1) {
      console.error("exact phrase not found");
      return null;
    }

    this.exact.splice(1, index);
  }

  // addExclude(input) {
  //   console.log("pushing to exclude", input);
  //   this.exclude.push(input);
  // }

  // removeExclude(input) {
  //   console.log("removing from exclude", input);

  //   const index = this.exclude.findIndex(input);
  //   if (index === -1) {
  //     console.error("exclude phrase not found");
  //     return null;
  //   }

  //   this.exclude.push(input);
  // }
}

export default Query;
