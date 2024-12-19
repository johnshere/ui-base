import { UComponent } from "./component";

export declare class UConfirmDelete extends UComponent {
  click: () => void | Promise<void>;
  title?: String;
  label?: String;
}