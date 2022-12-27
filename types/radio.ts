import { ElRadio } from "element-ui/types/radio";
import { ElRadioGroup } from "element-ui/types/radio-group";
import { UComponent } from "./component";
import { Dictionary } from "./dictionary";

export declare class URadio extends ElRadioGroup implements Dictionary {
  data?: Array<ElRadio>;
}
