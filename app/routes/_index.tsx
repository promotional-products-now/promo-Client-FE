import { Avatar } from "@nextui-org/avatar";
import type { MetaFunction } from "@remix-run/node";
import { useLocation } from "@remix-run/react";

export const meta: MetaFunction = () => {
  const location = useLocation();

  const pathname = location.pathname;
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export default function Index() {
  return (
    <div
      className="flex items-center justify-center flex-col "
      style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}
    >
      <h1 className="text-red-800">Welcome to Remix</h1>
      <ul>
        <li>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
