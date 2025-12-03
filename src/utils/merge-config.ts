import deepmerge from "deepmerge";

export const mergeConfig = (...configs: any[]) => {
  return deepmerge.all(configs);
};
