import Vue from "vue/types/umd";
import { UComponent } from "./component";
import { UTitle } from "./title";
import { UDialog } from "./dialog";

export class Title extends UTitle {}
export class Dialog extends UDialog  {}

export const version: string;

export interface InstallationOptions {}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export type Component = UComponent;

declare class UElement {
  Title;
  Dialog;
}

export default UElement;
