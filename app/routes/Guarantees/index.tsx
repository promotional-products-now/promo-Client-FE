import { guarantees } from "app/contents/guarantees";

const Guarantees = () => {
  return (
    <div className="flex flex-col gap-10 w-full py-10 px-4 text-sm leading-6 md:px-0 mx-auto md:w-[80%]">
      <div className="flex flex-col gap-2 text-center ">
        <h2 className="text-2xl md:text-3xl font-bold">Our Guarantees</h2>
        <p className="text-gray text-medium">
          Here is a 5 Rock Solid Guarantees to give you peace of mind and confidence that your
          satisfaction is our number 1 priority at all times.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2">
        {guarantees.map((guarantee) => (
          <div
            key={guarantee.id}
            className="flex flex-col gap-3 py-3 px-3 border border-neutral-100 md:px-5"
          >
            <div>
              <p className="text-sm md:text-xl font-semibold text-primary">{guarantee.title}</p>
              <p className="text-yellow text-sm md:text-lg">{guarantee.subTitle}</p>
            </div>
            <div className="flex gap-5">
              <p className="text-gray leading-6">{guarantee.body}</p>
              <div className="hidden lg:block">
                <svg
                  width="60px"
                  height="60px"
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M47.9756 8.72188C49.2764 8.20371 50.7223 8.20371 52.0231 8.72188C56.2164 10.3918 57.0356 16.8226 61.9835 17.1806C65.4677 17.4327 68.8869 14.5281 72.3831 15.3988C73.7931 15.75 75.011 16.649 75.7744 17.9023C78.1127 21.7426 75.0948 27.3871 78.9089 30.5736C81.5589 32.7865 85.9373 32.5001 88.241 35.2128C89.211 36.3555 89.6877 37.8459 89.5631 39.3487C89.1944 43.8191 83.4948 46.6149 84.7473 51.4328C85.6139 54.7678 89.2714 57.1124 89.5631 60.6512C89.6877 62.1541 89.211 63.6445 88.241 64.787C85.346 68.1953 79.086 67.0728 77.281 71.6924C76.0135 74.9349 77.641 79.032 75.7744 82.0974C75.011 83.3507 73.7931 84.2499 72.3831 84.6012C68.0419 85.682 63.6356 81.0187 59.4581 83.6491C56.4756 85.5266 55.4069 89.9312 52.0231 91.2778C50.7223 91.7962 49.2764 91.7962 47.9756 91.2778C44.5919 89.9312 43.5231 85.5266 40.5406 83.6491C36.4148 81.0516 31.8832 85.6637 27.6156 84.6012C26.2055 84.2499 24.9877 83.3507 24.2246 82.0974C21.8863 78.2574 24.9037 72.6124 21.0898 69.4262C18.4403 67.2133 14.0616 67.4999 11.7579 64.787C10.7877 63.6445 10.3112 62.1541 10.4354 60.6512C10.7279 57.1124 14.3844 54.7678 15.2514 51.4328C16.4914 46.6653 10.7995 43.7537 10.4354 39.3487C10.3112 37.8459 10.7877 36.3555 11.7579 35.2128C14.6525 31.8034 20.9118 32.9271 22.7176 28.3075C23.9853 25.0649 22.358 20.9677 24.2246 17.9023C24.9877 16.649 26.2055 15.75 27.6156 15.3988C31.1121 14.5281 34.5309 17.4327 38.0151 17.1806C42.9631 16.8227 43.7823 10.3918 47.9756 8.72188Z"
                    stroke="#FAB102"
                    strokeWidth="6.25"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M37.4995 55.5553C37.4995 55.5553 41.1453 55.5553 44.7912 62.4998C44.7912 62.4998 56.372 45.1386 66.6662 41.6665"
                    stroke="#0079C0"
                    strokeWidth="6.25"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
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