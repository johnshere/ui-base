import { ElSelect } from "element-ui/types/select";
import { ElOption } from "element-ui/types/option";
import { Dictionary } from "./dictionary";

export declare class USelect extends ElSelect implements Dictionary {
  data?: Array<ElOption>;
}
