import type { FormData } from '@/types/formData'
export const resetForm = function(formData:FormData[]) {
  return formData.map(item => { 
    item.data = ''
    return item 
  })
}