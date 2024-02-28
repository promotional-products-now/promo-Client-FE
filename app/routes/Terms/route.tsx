import fs from "fs";
import path from "path";
import Legal from "app/components/Legal";
import { useLoaderData } from "@remix-run/react";

export default function Terms() {
  const { content } = useLoaderData<typeof loader>();

  return (
    <div>
      <Legal content={content} />
    </div>
  );
}

export function loader() {
  const termsFilePath = path.resolve(process.cwd(), "app/contents", "terms.md");
  const termsContent = fs.readFileSync(termsFilePath, "utf-8");
  return { content: termsContent };
}
