import Vue from "vue/types/umd";
import { UComponent } from "./component";
import { UTitle } from "./title";
import { UDialog } from "./dialog";

/** Title Component */
export class Title extends UTitle {}
/** Dialog Component */
export class Dialog extends UDialog  {}

export const version: string;

export interface InstallationOptions {}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export type Component = UComponent;

