import type { Mask, MaskModelConfig } from "../store/mask";

export type BuiltinMask = Omit<Mask, "id" | "modelConfig"> & {
  builtin: Boolean;
  modelConfig: MaskModelConfig;
};
