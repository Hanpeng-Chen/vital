import type { ExtractPropTypes } from 'vue'
export const iconProps = {
  size: {
    type: Number
  },
  color: {
    type: String
  }
} as const // as const 让对象的每一个属性变成只读

export type IconProps = ExtractPropTypes<typeof iconProps>