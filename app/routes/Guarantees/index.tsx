import { guarantees } from "app/contents/guarantees";

const Guarantees = () => {
  return (
    <div className="flex flex-col gap-10 w-full mx-auto py-10 px-4 text-sm leading-6 md:px-0 mx-auto md:w-[80%]">
      <div className="flex flex-col gap-2 text-center ">
        <h2 className="text-4xl font-extrabold">Our Guarantees</h2>
        <p className="text-gray text-sm md:text-lg">
          Here is a 5 Rock Solid Guarantees to give you peace of mind and confidence that your
          satisfaction is our number 1 priority at all times.
        </p>
      </div>

      <div className="grid grid-cols-1 gap- md:grid-cols-2">
        {guarantees.map((guarantee) => (
          <div
            key={guarantee.id}
            className="flex flex-col gap-3 py-3 px-3 border border-neutral-100 md:px-5"
          >
            <div>
              <p className="text-medium md:text-2xl font-semibold text-primary">
                {guarantee.title}
              </p>
              <p className="text-yellow text-sm md:text-lg">{guarantee.subTitle}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-gray leading-6">{guarantee.body}</p>
              <div className="hidden md:block">
                <svg
                  fill="#FAB102"
                  width="60px"
                  height="60px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  stroke="#FAB102"
                  stroke-width="0.00024000000000000003"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="2.688"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M4.035 15.479A3.976 3.976 0 0 0 4 16c0 2.378 2.138 4.284 4.521 3.964C9.214 21.198 10.534 22 12 22s2.786-.802 3.479-2.036C17.857 20.284 20 18.378 20 16c0-.173-.012-.347-.035-.521C21.198 14.786 22 13.465 22 12s-.802-2.786-2.035-3.479C19.988 8.347 20 8.173 20 8c0-2.378-2.143-4.288-4.521-3.964C14.786 2.802 13.466 2 12 2s-2.786.802-3.479 2.036C6.138 3.712 4 5.622 4 8c0 .173.012.347.035.521C2.802 9.214 2 10.535 2 12s.802 2.786 2.035 3.479zm1.442-5.403 1.102-.293-.434-1.053A1.932 1.932 0 0 1 6 8c0-1.103.897-2 2-2 .247 0 .499.05.73.145l1.054.434.293-1.102a1.99 1.99 0 0 1 3.846 0l.293 1.102 1.054-.434C15.501 6.05 15.753 6 16 6c1.103 0 2 .897 2 2 0 .247-.05.5-.145.73l-.434 1.053 1.102.293a1.993 1.993 0 0 1 0 3.848l-1.102.293.434 1.053c.095.23.145.483.145.73 0 1.103-.897 2-2 2-.247 0-.499-.05-.73-.145l-1.054-.434-.293 1.102a1.99 1.99 0 0 1-3.846 0l-.293-1.102-1.054.434A1.935 1.935 0 0 1 8 18c-1.103 0-2-.897-2-2 0-.247.05-.5.145-.73l.434-1.053-1.102-.293a1.993 1.993 0 0 1 0-3.848z"></path>
                    <path d="m15.742 10.71-1.408-1.42-3.331 3.299-1.296-1.296-1.414 1.414 2.704 2.704z"></path>
                  </g>
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guarantees;