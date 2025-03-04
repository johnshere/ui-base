 // 显式声明类型引用：https://github.com/microsoft/TypeScript/pull/58176#issuecomment-2052698294
import type {} from 'vue2/types/common';
import type {} from 'vue2/types/v3-component-options';
import type {} from 'vue2/types/v3-component-public-instance';
import type {} from '@vue3/shared';

import "./style/index.scss";
import _Title from "./title";
import _TitleCard from "./title-card";
import _PageTable from "./pageTable";
import _Top from "./top";
import _RichEditor from "./RichEditor";
import _RichView from "./RichView";
import _ColPreset from "./col-preset";
import _Teleport from "./teleport";
import _ConfirmDelete from "./ConfirmDelete";

import _Form from "./uelement/u-form";
import _FormItem from "./uelement/u-form-item";
import _Input from "./uelement/u-input";
import _Radio from "./uelement/u-radio";
import _RadioGroup from "./uelement/u-radio-group";
import _Select from "./uelement/u-select";
import _Cascader from "./uelement/u-cascader";
import _DatePicker from "./uelement/u-date-picker";

import _Dialog from "./uelement/u-dialog";
import _Button from "./uelement/u-button";
import _Link from "./uelement/u-link";
import _Descriptions from "./uelement/u-descriptions";
import _Table from "./uelement/u-table";
import _TableColumn from "./uelement/u-table/UTableColumn.js";
import _Pagination from "./uelement/u-pagination";

export * from "./utils";

export const UTitle = _Title;
export const UTitleCard = _TitleCard;
export const UPageTable = _PageTable;
export const UTop = _Top;
export const URichEditor = _RichEditor as any;
export const URichView = _RichView;
export const UColPreset = _ColPreset;
export const UTeleport = _Teleport;
export const UConfirmDelete = _ConfirmDelete;

export const UForm = _Form;
export const UFormItem = _FormItem;
export const UInput = _Input;
export const USelect = _Select;
export const URadio = _Radio;
export const URadioGroup = _RadioGroup;
export const UCascader = _Cascader;
export const UDatePicker = _DatePicker;

export const UDialog = _Dialog;
export const UButton = _Button;
export const ULink = _Link;
export const UDescriptions = _Descriptions;
export const UTable = _Table;
export const UTableColumn = _TableColumn;
export const UPagination = _Pagination;

// 兼容旧代码
export const Title = _Title;
export const TitleCard = _TitleCard;
export const PageTable = _PageTable;
export const Top = _Top;
export const RichEditor = _RichEditor as any;
export const RichView = _RichView;
export const ColPreset = _ColPreset;
export const Teleport = _Teleport;
export const ConfirmDelete = _ConfirmDelete;

export const Form = _Form;
export const FormItem = _FormItem;
export const Input = _Input;
export const Select = _Select;
export const Radio = _Radio;
export const RadioGroup = _RadioGroup;
export const Cascader = _Cascader;
export const DatePicker = _DatePicker;

export const Dialog = _Dialog;
export const Button = _Button;
export const Link = _Link;
export const Descriptions = _Descriptions;
export const Table = _Table;
export const TableColumn = _TableColumn;
export const Pagination = _Pagination;

//  新增的、非element组件
const newComponents = {
  Title,
  PageTable,
  Top,
  TitleCard,
  RichEditor,
  RichView,
  ColPreset,
  Teleport,
  ConfirmDelete
};
// 覆盖element组件
const coverComponents = {
  Form,
  FormItem,
  Input,
  Select,
  Radio,
  RadioGroup,
  Cascader,
  DatePicker,

  Dialog,
  Button,
  Link,
  Descriptions,
  Table,
  TableColumn,
  Pagination
};

const install = function (Vue, options = {}) {
  console.log("ui-base install");
  // 版本检测
  if (Vue.version?.startsWith('3.')) {
    // 兼容 Vue3 的 globalProperties
    Vue.config.globalProperties.$UBase = Object.assign({}, options);
  } else {
    // Vue2 的原型链方式
    Vue.prototype.$UBase = Object.assign({}, options);
  }

  /**
   * UElement组件注册
   */
  Object.keys(coverComponents).forEach(function (key) {
    const name = "U" + key;
    Vue.component(name, coverComponents[key]);
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
  install,
  ...newComponents,
  ...coverComponents,
};
