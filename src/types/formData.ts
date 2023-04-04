import type { Option } from '@/types/options'
export interface FormData {
  [key: string]: any
  name: string
  key?: string
  type?: string
  placeholder?: string
  isSelect?: boolean
  isTextArea?: boolean
  isCheckbox?: boolean
  isImage?: boolean
  isRadio?: boolean
  position?: string
  value?: string
  options?:Option[] 
  data: any | any[]
  required: boolean
  errors?: string | string[]
}
