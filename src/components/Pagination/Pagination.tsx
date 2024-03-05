import { SvgIcon } from "@progress/kendo-react-common";
import {
  chevronDoubleLeftIcon,
  chevronDoubleRightIcon,
  chevronLeftIcon,
  chevronRightIcon,
} from "@progress/kendo-svg-icons";
import { Fragment } from "react/jsx-runtime";

interface Props {
  page: number;
  setPage: (value: number) => void;
  total_pages: number;
  total_results: number;
}

export const Pagination = ({
  page,
  setPage,
  total_pages,
  total_results,
}: Props) => {
  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= total_pages) {
      setPage(pageNumber);
    }
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">
              {Math.min((page - 1) * 20 + 1, total_pages)}
            </span>{" "}
            to{" "}
            <span className="font-medium">
              {Math.min(page * 20, total_pages)}
            </span>{" "}
            of <span className="font-medium">{total_results}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageChange(1)}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">First</span>
              <SvgIcon icon={chevronDoubleLeftIcon} className="w-5" />
            </button>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <SvgIcon icon={chevronLeftIcon} className="w-5" />
            </button>
            {[1, page, total_pages]
              .filter(
                (pageNumber) => pageNumber >= 1 && pageNumber <= total_pages,
              )
              .map((pageNumber, index) => (
                <Fragment key={index}>
                  {index !== 1 && (
                    <span className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300">{`...`}</span>
                  )}
                  <button
                    onClick={() => handlePageChange(pageNumber)}
                    key={pageNumber}
                    className={`relative inline-flex items-center px-2 py-2 text-sm font-semibold ${pageNumber === page ? "bg-indigo-600 text-white" : "text-gray-900"} ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0`}
                  >
                    {pageNumber}
                  </button>
                </Fragment>
              ))}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === total_pages}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <SvgIcon icon={chevronRightIcon} className="w-5" />
            </button>
            <button
              onClick={() => handlePageChange(total_pages)}
              className="relative inline-flex items-center px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Last</span>
              <SvgIcon icon={chevronDoubleRightIcon} className="w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
