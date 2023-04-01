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
    // todo construct plaintext query from provided filters
    return this.rawQuery;
  }

  setRawQuery(input) {
    // ? probably should disable this?
    console.log("query raw is now", input);
    this.rawQuery = input;
  }

  addExact(input) {
    if (this.exact.some((phrase) => phrase === input)) {
      console.warn("ignoring duplicate");
      return null;
    }

    this.exact.push(input);
    return input;
  }

  removeExact(input) {
    const index = this.exact.findIndex((phrase) => phrase === input);

    if (index === -1) {
      console.error("exact phrase not found");
      return null;
    }

    const response = this.exact.splice(index, 1);
    return response;
  }

  addExclude(input) {
    if (this.exclude.some((phrase) => phrase === input)) {
      console.warn("ignoring duplicate");
      return null;
    }

    this.exclude.push(input);
    return input;
  }

  removeExclude(input) {
    const index = this.exclude.findIndex((phrase) => phrase === input);

    if (index === -1) {
      console.error("exclude phrase not found");
      return null;
    }

    const response = this.exclude.splice(index, 1);
    return response;
  }

  addSite(input) {
    if (this.site.some((phrase) => phrase === input)) {
      console.warn("ignoring duplicate");
      return null;
    }

    this.site.push(input);

    return input;
  }

  removeSite(input) {
    const index = this.site.findIndex((phrase) => phrase === input);

    if (index === -1) {
      console.error("site not found");
      return null;
    }

    const response = this.site.splice(index, 1);
    return response;
  }

  addRange(to, from) {
    this.range = { to, from };
    console.log("in instance ", to, from);
    console.log(this.range);
    return this.range;
  }

  removeRange() {
    this.range = { to: "", from: "" };
    return this.range;
  }
}

export default Query;
