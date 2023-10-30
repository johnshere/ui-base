import "./style/index.less";
import UTitle from "./title";
import UDialog from "./dialog";
import UPageTable from "./pageTable";
import UTop from "./top";
import USelect from "./form/select";
import URadio from "./form/radio";
import UButton from "./uelement/u-button";
import UForm from "./uelement/u-form";
import UFormItem from "./uelement/u-form-item";
import ULink from "./uelement/u-link";

export * from "./utils";

export const Title = UTitle;
export const Dialog = UDialog;
export const PageTable = UPageTable;
export const Top = UTop;
export const Select = USelect;
export const Radio = URadio;
export const Button = UButton;
export const Form = UForm;
export const FormItem = UFormItem;
export const Link = ULink;

const components = {
  Title,
  Dialog,
  PageTable,
  Top,
  Select,
  Radio,
  UButton,
  UForm,
  UFormItem,
  ULink,
};

const install = function (Vue, options) {
  Vue.prototype.$UBase = {
    size: options.size || "",
  };

  const componentKeys = Object.keys(components);
  componentKeys.forEach(function (key) {
    const component = components[key];

    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: require("../package.json").version,
  install,
  ...components,
};
