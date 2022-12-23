import Vue from "vue/types/umd";
import { UComponent } from "./component";
import { UTitle } from "./title";
import { UDialog } from "./dialog";
import { UPageTable } from './pageTable'
import { UTop } from './top'

/** Title Component */
export class Title extends UTitle { }
/** Dialog Component */
export class Dialog extends UDialog { }
/** PageTable Component */
export class PageTable extends UPageTable { }

export class Top extends UTop { }

export const version: string;

export interface InstallationOptions { }

export function install(vue: typeof Vue, options: InstallationOptions): void;

export type Component = UComponent;

