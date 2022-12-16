import Vue from "vue/types/umd";
import { UComponent } from "./component";
import { UTitle } from "./title";

export class Title extends UTitle {}

export const version: string;

export interface InstallationOptions {}

export function install(vue: typeof Vue, options: InstallationOptions): void;

export type Component = UComponent;

declare class UElement {
  Title;
}

export default UElement;
