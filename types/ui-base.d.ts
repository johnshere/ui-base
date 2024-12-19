import Vue from "vue/types/umd";
import { UComponent } from "./component";
import { UTitle } from "./title";
import { UTitleCard } from "./title-card";
import { UPageTable } from './pageTable'
import { UTop } from './top'
import { URichEditor, URichView } from './rich'
import { UColPreset } from "./col-preset";
import { UTeleport } from './teleport'
import { UConfirmDelete } from './ConfirmDelete'

import { URadioGroup } from './radio'
import { UDescriptions } from './descriptions'
import { USelect } from './select'
import { UTable } from './table'
import { UTableColumn } from './table-column'

import { UDialog } from "./dialog";

/** utils */
export * from './utils'

export class Title extends UTitle { }
export class TitleCard extends UTitleCard { }
export class PageTable extends UPageTable { }
export class Top extends UTop { }
export class RichEditor extends URichEditor { }
export class RichView extends URichView { }
export class ColPreset extends UColPreset { }
export class Teleport extends UTeleport { }
export class ConfirmDelete extends UConfirmDelete { }

export class Select extends USelect { }
export class RadioGroup extends URadioGroup { }

export class Dialog extends UDialog { }
export class Descriptions extends UDescriptions { }
export class Table extends UTable { }
export class TableColumn extends UTableColumn { }

export const version: string;

export interface InstallationOptions { }

export function install(vue: typeof Vue, options: InstallationOptions): void;

export type Component = UComponent;

