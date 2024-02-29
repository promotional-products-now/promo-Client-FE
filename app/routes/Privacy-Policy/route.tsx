import fs from "fs";
import path from "path";
import Legal from "app/components/Legal";
import { useLoaderData } from "@remix-run/react";

export default function Privacy(): JSX.Element {
  const { content } = useLoaderData<typeof loader>();

  return (
    <div className="space-y-4">
      <h1 className="text-center text-black text-2xl font-medium">Privacy Policy</h1>
      <div className="flex flex-col gap-3 w-full mx-auto py-4 lg:py-10 lg:px-5 lg:w-4/5">
        <Legal content={content} />
      </div>
    </div>
  );
}

export function loader() {
  const privacyFilePath = path.resolve(process.cwd(), "app/contents", "privacy.md");
  const privacyContent = fs.readFileSync(privacyFilePath, "utf-8");
  return { content: privacyContent };
}
