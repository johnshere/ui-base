import type { Plugin } from "rollup";
import { IS_VUE2 } from "./constance";
import { PACKAGES_ROOT_PATH } from "@shared/config/paths";
import path from "path";
import fs from 'fs';
// import MagicString from "magic-string";

let EnterFile = fs.readFileSync(path.join(PACKAGES_ROOT_PATH, 'index.ts'), {encoding: 'utf-8'});
EnterFile = EnterFile.split('const coverComponents = {').pop()!
const Enters = EnterFile.split('};').shift()!.replace(/\n|\s/g,'').split(',')

const transformToElementPlus: Plugin = {
    name: 'transform-to-element-plus',
    async transform(code: string, id: string) {
      // const existingMap = this.getCombinedSourcemap()
      if (!IS_VUE2) {
        code = code.replace(new RegExp('process.env.VUE_VERSION', 'g'), process.env.VUE_VERSION || '');
        code = code.replace(new RegExp('element-ui', 'g'), 'element-plus');

        for(const name of Enters) {
          // 匹配包含目标组件的导入语句（支持多组件导入）
          const importRegex = new RegExp(
            `import\\s*{([^{}]*?\\b${name}\\b(?:\\s+as\\s+\\w+)?[^{}]*?)}\\s+from\\s+['"]element-plus['"]`,
            'g'
          );

          code = code.replace(importRegex, (match, imports) => {
            // 分解导入项并处理目标组件
            const processedImports = imports.split(',').map((item: any) => {
              const componentMatch = item.trim().match(/^(\w+)(?:\s+as\s+(\w+))?$/);
              if (!componentMatch) return item;
              
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              const [_, original, alias] = componentMatch;
              if (original === name) {
                // 添加 El 前缀并保持原名称作为别名
                return `El${name} as ${alias || name}`;
              }
              return item;
            }).join(', ');

            return `import { ${processedImports} } from 'element-plus'`;
          });
        }
      }
      // const magicString = new MagicString(code)
      // const map = magicString.generateMap({
      //     source: id,
      //     includeContent: true,
      //     hires: true
      // })
      return {
        code, //: magicString.toString(),
        map: this.getCombinedSourcemap()
      };
    }
}

export default transformToElementPlus