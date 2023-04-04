import type { FormData } from '@/types/formData'
const extractData = (formData: FormData[], apiKeys: string[]) => {
  const datas: FormData = {
    name: '',
    data: '',
    required: false
  }

  apiKeys.map((key: string) => {
    const resultFind = formData.find((item) => item.key === key)
    let formDataValue
    if (resultFind) {
      formDataValue = resultFind[key] != undefined ? key : 'data'
      datas[key] = resultFind[formDataValue]
    }
  })

  return datas
}

export default extractData
