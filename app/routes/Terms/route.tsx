import fs from "fs";
import path from "path";
import Legal from "app/components/Legal";
import { useLoaderData } from "@remix-run/react";
// import styles from "../../styles/legalDoc.module.css"

export default function Terms() {
  const { content } = useLoaderData<typeof loader>();

  return (
    <div>
      <div className="flex flex-col gap-3 w-full mx-auto py-10 lg:px-5 lg:w-4/5">
        <Legal content={content} />
      </div>
    </div>
  );
}

export function loader() {
  const termsFilePath = path.resolve(process.cwd(), "app/contents", "terms.md");
  const termsContent = fs.readFileSync(termsFilePath, "utf-8");
  return { content: termsContent };
}
