import ElementUI from 'element-ui'

import "./style/index.less";
import UTitle from "./title";
import UPageTable from "./pageTable";
import UTop from "./top";
import UDialog from "./uelement/u-dialog";
import USelect from "./uelement/u-select";
import URadioGroup from "./uelement/u-radio-group";
import UButton from "./uelement/u-button";
import UForm from "./uelement/u-form";
import UFormItem from "./uelement/u-form-item";
import ULink from "./uelement/u-link";
import UDescriptions from "./uelement/u-descriptions";
import UTable from "./uelement/u-table";
import UTableColumn from './uelement/UTableColumn.js'

export * from "./utils";

export const Title = UTitle;
export const Dialog = UDialog;
export const PageTable = UPageTable;
export const Top = UTop;
export const Select = USelect;
export const RadioGroup = URadioGroup;
export const Button = UButton;
export const Form = UForm;
export const FormItem = UFormItem;
export const Link = ULink;
export const Descriptions = UDescriptions;
export const Table = UTable;
export const TableColumn = UTableColumn;

//  新增的、非element组件
const newComponents = {
  Title,
  PageTable,
  Top,
};
// 覆盖element组件
const coverComponents = {
  Dialog,
  Select,
  RadioGroup,
  Button,
  Form,
  FormItem,
  Link,
  Descriptions,
  Table,
  TableColumn,
};

const install = function (Vue, options = {}) {
  Vue.prototype.$UBase = {
    size: options.size || "",
  };

  let componentKeys = Object.keys(ElementUI);
  /**
   * UElement组件注册
   */
  componentKeys.forEach(function (key) {
    let component = ElementUI[key];
    if (!Vue.prototype.isComponent(component)) {
      return;
    }
    // 覆盖element原有组件
    if (coverComponents[key]) {
      component = coverComponents[key]
    }

    const name = component.name.replace('El', 'U')
    Vue.component(name, component);
  });
  /**
   * 新增自定义组件注册
   */
   Object.values(newComponents).forEach(component => Vue.component(component.name, component))
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: require("../package.json").version,
  install,
  ...newComponents,
  ...coverComponents,
};
