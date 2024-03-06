import { SvgIcon } from "@progress/kendo-react-common";
import {
  chevronDoubleLeftIcon,
  chevronDoubleRightIcon,
  chevronLeftIcon,
  chevronRightIcon,
} from "@progress/kendo-svg-icons";

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
    <div className="flex items-center justify-between border-t border-gray-200 bg-white py-3">
      <div className="flex sm:flex-1 sm:items-center sm:justify-between gap-4">
        <div>
          <p className="text-sm text-gray-700">
            Mostrando{" "}
            <span className="font-medium">
              {Math.min((page - 1) * 20 + 1, total_results)}
            </span>{" "}
            a{" "}
            <span className="font-medium">
              {Math.min(page * 20, total_results)}
            </span>{" "}
            de <span className="font-medium">{total_results}</span> resultados
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              onClick={() => handlePageChange(1)}
              className="relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              aria-label="First"
            >
              <SvgIcon icon={chevronDoubleLeftIcon} className="w-5" />
            </button>
            <button
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
              className="relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              aria-label="Previous"
            >
              <SvgIcon icon={chevronLeftIcon} className="w-5" />
            </button>
            {page !== 1 && (
              <span
                className="w-9 h-9 flex relative justify-center items-center px-2 py-2 text-sm font-semibold
                ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                ...
              </span>
            )}
            {page - 1 !== 0 && (
              <button
                onClick={() => handlePageChange(page - 1)}
                className="w-9 h-9 flex relative justify-center items-center px-2 py-2 text-sm font-semibold
                ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {page - 1}
              </button>
            )}
            <button
              className="w-9 h-9 justify-center relative inline-flex items-center px-2 py-2 text-sm font-semibold
                bg-indigo-600 text-white ring-1 ring-inset ring-gray-300 hover:bg-indigo-500 focus:z-20 focus:outline-offset-0"
            >
              {page}
            </button>
            {page + 1 < total_pages && (
              <button
                onClick={() => handlePageChange(page + 1)}
                className="w-9 h-9 flex relative justify-center items-center px-2 py-2 text-sm font-semibold
                ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                {page + 1}
              </button>
            )}
            {page < total_pages && (
              <span
                className="w-9 h-9 flex relative justify-center items-center px-2 py-2 text-sm font-semibold
                ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              >
                ...
              </span>
            )}
            <button
              onClick={() => handlePageChange(page + 1)}
              disabled={page === total_pages}
              className="relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              aria-label="Next"
            >
              <SvgIcon icon={chevronRightIcon} className="w-5" />
            </button>
            <button
              onClick={() => handlePageChange(total_pages)}
              className="relative inline-flex items-center px-2 py-2 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
              aria-label="Last"
            >
              <SvgIcon icon={chevronDoubleRightIcon} className="w-5" />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
};
