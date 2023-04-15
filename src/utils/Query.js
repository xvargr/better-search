class Query {
  constructor() {
    // this.rawQuery = initialQuery || "";
    this.general = "";
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
    let rawQuery = this.general;

    // exact phrase
    this.exact.forEach((phrase) => {
      rawQuery = `${rawQuery} "${phrase}"`;
    });

    // exclude phrase
    this.exclude.forEach((phrase) => {
      rawQuery = `${rawQuery} -${phrase}`;
    });

    // todo site regex or add .com?? or reject not a site
    // from site
    this.site.forEach((phrase) => {
      rawQuery = `${rawQuery} site:${phrase}`;
    });

    // range
    if (this.range.from.length > 0 && this.range.to.length > 0) {
      rawQuery = `${rawQuery} ${this.range.from}..${this.range.to}`;
    }

    // todo OR combine

    return this.rawQuery; // ! untested
  }

  // setRawQuery(input) {
  //   // ? probably should disable this?
  //   console.log("query raw is now", input);
  //   // this.rawQuery = input;
  // }

  getGeneralQuery() {
    return this.general;
  }

  setGeneralQuery(input) {
    this.general = input;
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
    return this.range;
  }

  removeRange() {
    this.range = { to: "", from: "" };
    return this.range;
  }
}

export default Query;
