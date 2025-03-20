import type { Plugin } from "rollup";
import { IS_VUE2 } from "./constance";
// import { PACKAGES_ROOT_PATH } from "@shared/config/paths";
// import path from "path";
// import fs from 'fs';
// import MagicString from "magic-string";

const version = `String(${process.env.VUE_VERSION || ""})`;
const transformToVue3: Plugin = {
  name: "transform-to-vue3",
  async transform(code: string, id: string) {
    // const existingMap = this.getCombinedSourcemap()
    code = code.replace(/process\.env\.VUE_VERSION/g, version);

    if (IS_VUE2) {
      if (code.includes("element-plus")) {
        debugger;
      }
      code = code.replace(/\n.*element-plus.*\r?\n/g, "\n");
    } else {
      code = code.replace(
        /element-ui\/packages\/theme-chalk/g,
        "element-plus/theme-chalk"
      );
      code = code.replace(/element-ui/g, "element-plus");

      // 通用处理所有element-plus的导入
      const importRegex = /import\s*{([^}]+)}\s+from\s+['"]element-plus['"]/g;

      code = code.replace(importRegex, (match, imports) => {
        const processedImports = imports
          .split(",")
          .map((item: any) => {
            // 处理带别名的导入项（例如：Button as MyButton）
            const [original, alias] = item.trim().split(/\s+as\s+/);
            if (original.startsWith("El") || original.startsWith("*"))
              return original;
            const elComponent = `El${original}`; // 防止重复添加El前缀

            // 保留原别名，如果没有别名则使用转换后的名称
            return `${elComponent} as ${alias || original}`;
          })
          .join(", ");

        return `import { ${processedImports} } from 'element-plus'`;
      });
    }
    // const magicString = new MagicString(code)
    // const map = magicString.generateMap({
    //     source: id,
    //     includeContent: true,
    //     hires: true
    // })
    return {
      code, //: magicString.toString(),
      map: this.getCombinedSourcemap(),
    };
  },
};

export default transformToVue3;
