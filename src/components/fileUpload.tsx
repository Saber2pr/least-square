import React from 'react'
import { readFile, csvtoJson } from '../utils'

export const FileUpload = ({ onLoad }: { onLoad?: (data: any) => void }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    readFile(event.target.files[0]).then(res => {
      const str = res.toString()
      const json = csvtoJson(str.toString())

      onLoad && onLoad(JSON.parse(json))
    })

  return <input type="file" onChange={onChange} />
}
