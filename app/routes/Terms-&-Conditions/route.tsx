import fs from "fs";
import path from "path";
import Legal from "app/components/Legal";
import { useLoaderData } from "@remix-run/react";

export default function Terms(): JSX.Element {
  const { content } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-4">
      <h1 className="text-center text-black text-2xl md:text-3xl font-bold">Terms & Conditions</h1>
      <div className="flex flex-col gap-3 w-full mx-auto p-4 lg:py-10 lg:px-5 lg:w-4/5">
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
