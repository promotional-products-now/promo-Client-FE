import { Card, CardBody } from "@nextui-org/react";

export function ProductAboutCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div>
      <div className="px-8 py-2 border border-b-0 border-primary w-fit">
        <span className="text-primary">{title}</span>
      </div>
      <Card shadow="none" className="full rounded-none border border-primary bg-gray1">
        <CardBody className="px-4 md:px-8 space-y-3">
          <div className="">
            <span className="font-semibold text-sm">Description</span>
            <p className="text-xs md:text-sm">{desc}</p>
          </div>
          <div>
            <span className="font-semibold text-sm">Please Note:</span>
            <p className="text-xs md:text-sm"></p>
          </div>
        </CardBody>
      </Card>
    </div>
  );
}
