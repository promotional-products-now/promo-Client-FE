import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Offline | Promotional Products Now" },
    {
      name: "description",
      content: "No Internet",
    },
  ];
};

const Offline = () => {
  return (
    <div className="flex flex-col gap-3 w-full mx-auto py-4 px-0 lg:p-0 ">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <svg
          className="w-16 h-16 mx-auto text-red-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75M12 18h.01M20.625 18.75A9.38 9.38 0 1112 2.625a9.38 9.38 0 018.625 16.125z"
          ></path>
        </svg>
        <h1 className="text-2xl font-semibold mt-4">You're Offline</h1>
        <p className="text-gray-600 mt-2">
          It seems you have lost your internet connection. Please check your connection and try
          again.
        </p>
      </div>
    </div>
  );
};

export default Offline;
