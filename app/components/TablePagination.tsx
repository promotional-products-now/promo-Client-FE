import { Pagination, Button, Select, SelectItem } from "@nextui-org/react";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const filterLimits = [
  { value: "10", label: "10" },
  { value: "15", label: "15" },
  { value: "30", label: "30" },
  { value: "45", label: "45" },
];

export type TablePaginationProps = {
  totalPages: number;
  currentPage: number;
  handlePrevious: () => void;
  handleNext: (arg?: number) => void;
  setLimit: React.Dispatch<React.SetStateAction<number>>;
};

export default function TablePagination({
  handleNext,
  handlePrevious,
  totalPages,
  currentPage,
  setLimit,
}: TablePaginationProps): JSX.Element {
  return (
    <div className="flex items-center justify-between flex-col md:flex-row w-full gap-4">
      <div className="flex items-center flex-wrap- md:flex-nowrap flex-grow gap-4 md:gap-6">
        <Button
          radius="sm"
          variant="bordered"
          className="border font-semibold text-sm"
          startContent={<MdArrowBack className="text-xl" />}
          onPress={handlePrevious}
          isDisabled={currentPage === 1}
        >
          Previous
        </Button>
        <Select
          items={filterLimits}
          defaultSelectedKeys={["10"]}
          variant="flat"
          size="sm"
          className="w-[80px] h-fit"
          classNames={{
            base: "border bg-white dark:bg-darkest dark:border-dark rounded-lg h-full",
          }}
          onChange={(val) => setLimit(Number(val.target.value))}
          aria-label="filter-table-data"
        >
          {(limit) => (
            <SelectItem key={limit.value} value={limit.value}>
              {limit.label}
            </SelectItem>
          )}
        </Select>
      </div>
      <Pagination
        initialPage={1}
        page={currentPage}
        total={totalPages}
        onChange={(page) => handleNext(page)}
        className="flex-grow"
      />
      <Button
        radius="sm"
        variant="bordered"
        isDisabled={totalPages === currentPage}
        className="border font-semibold text-sm"
        endContent={<MdArrowForward className="text-xl" />}
        onPress={() => handleNext()}
      >
        Next
      </Button>
    </div>
  );
}
