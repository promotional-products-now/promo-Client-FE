import Legal from 'app/components/Legal'
import React from 'react'
import fs from "fs"
import path from "path"


export default function Terms({ termsContent }) {
  return (
    <div>route

      <Legal content={termsContent} />
    </div>
  )
}


export function loader() {
  const termsFilePath = path.resolve(process.cwd(), "contents", "terms.md");
  const termsContent = fs.readFileSync(termsFilePath, 'utf-8')
  return termsContent
}