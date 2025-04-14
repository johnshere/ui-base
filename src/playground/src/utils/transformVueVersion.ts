const version = `String(${process.env.VUE_VERSION || ""})`;
export const transformVueVersion: any = {
  name: "transform-vue-version",
  async transform(code: string, id: string) {
    // const existingMap = this.getCombinedSourcemap()
    code = code.replace(/process\.env\.VUE_VERSION/g, version);
    return {
      code, //: magicString.toString(),
      map: this.getCombinedSourcemap(),
    };
  },
};
