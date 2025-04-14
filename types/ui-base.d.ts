import Vue from "vue/types/umd";
import { UComponent } from "./component";
import { UTitle } from "./title";
export * from './title'
import { UTitleCard } from "./title-card";
export * from "./title-card";
import { UPageTable } from './pageTable'
export * from './pageTable'
import { UTop } from './top'
export * from './top'
import { URichEditor, URichView } from './rich'
export * from './rich'
import { UColPreset } from "./col-preset";
export * from './col-preset'
import { UTeleport } from './teleport'
export * from './teleport'
import { UConfirmDelete } from './ConfirmDelete'
export * from './ConfirmDelete'

import { UDescriptions } from './descriptions'
export * from './descriptions'
import { UForm } from './form'
export * from './form'
import { UFormItem } from './form-item'
export * from './form-item'
import { UInput } from './input'
export * from './input'
import { USelect } from './select'
export * from './select'
import { URadio } from './radio'
export * from './radio'
import { URadioGroup } from './radio-group'
export * from './radio-group'
import { UCheckbox } from './checkbox'
export * from './checkbox'
import { UCascader } from './cascader'
export * from './cascader'
import { UDatePicker } from './datePicker'
export * from './datePicker'

import { UDialog } from "./dialog";
export * from './dialog'
import { UButton } from "./button";
export * from './button'
import { ULink } from "./link";
export * from './link'
import { UTable } from './table'
export * from './table'
import { UTableColumn } from './table-column'
export * from './table-column'
import { UPagination } from './pagination'
export * from './pagination'

/** utils */
export * from './utils'

// 兼容旧代码
export class Title extends UTitle { }
export class TitleCard extends UTitleCard { }
export class PageTable extends UPageTable { }
export class Top extends UTop { }
export class RichEditor extends URichEditor { }
export class RichView extends URichView { }
export class ColPreset extends UColPreset { }
export class Teleport extends UTeleport { }
export class ConfirmDelete extends UConfirmDelete { }

export class Descriptions extends UDescriptions { }
export class Form extends UForm { }
export class FormItem extends UFormItem { }
export class Input extends UInput { }
export class Select extends USelect { }
export class Radio extends URadio { }
export class RadioGroup extends URadioGroup { }
export class Checkbox extends UCheckbox { }
export class Cascader extends UCascader { }
export class DatePicker extends UDatePicker { }

export class Dialog extends UDialog { }
export class Button extends UButton { }
export class Link extends ULink { }
export class Table extends UTable { }
export class TableColumn extends UTableColumn { }
export class Pagination extends UPagination { }

export const version: string;

export interface InstallationOptions { }

export function install(vue: typeof Vue, options: InstallationOptions): void;

export type Component = UComponent;

