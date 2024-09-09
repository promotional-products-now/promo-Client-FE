import { Card, CardBody } from "@nextui-org/react";
import React from "react";

export function ProductAboutCard({
  title,
  desc,
  note,
}: {
  title: string;
  desc?: string;
  note?: React.ReactNode;
}) {
  return (
    <div>
      <div className="px-8 py-2 border border-b-0 border-primary w-fit">
        <span className="text-primary">{title}</span>
      </div>
      <Card shadow="none" className="full rounded-none border border-primary bg-gray1">
        <CardBody className="px-4 md:px-8 space-y-3">
          {desc && (
            <div className="">
              <div className="font-semibold mb-2 ">Description</div>
              <p className="text-zinc-700">{desc}</p>
            </div>
          )}
          {note && <div className="text-zinc-700">{note}</div>}
        </CardBody>
      </Card>
    </div>
  );
}
