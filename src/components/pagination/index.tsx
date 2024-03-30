import { usePagination, DOTS } from "hooks/usePagination";
import Pagination from "react-bootstrap/Pagination";

interface Props {
  currentPage?: number;
  pageSize?: number;
  totalCount?: number;
  siblingCount?: number;
  onChangePage?: (page: number) => void;
}

function PaginationComponent({
  currentPage = 1,
  pageSize = 1,
  totalCount = 0,
  siblingCount = 1,
  onChangePage = () => null,
}: Props) {
  const paginationRange: (string | number)[] | undefined = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });
  if (currentPage === 0 || (!!paginationRange && paginationRange?.length < 2)) {
    return null;
  }
  let lastPage =
    !!paginationRange && paginationRange[paginationRange.length - 1];
  return (
    <Pagination>
      <Pagination.Prev
        disabled={currentPage == 1}
        onClick={() => onChangePage(currentPage - 1)}
      />
      {paginationRange?.map((pageCount, i) => {
        if (pageCount === DOTS) {
          return <Pagination.Ellipsis key={`${i}_${pageCount}`} />;
        }
        return (
          <Pagination.Item
            linkStyle={
              pageCount === currentPage
                ? {
                    backgroundColor: "#afd5d8",
                    color: "black",
                    borderColor: "#d9d9d9",
                  }
                : { backgroundColor: "white", color: "black" }
            }
            active={pageCount === currentPage}
            key={`${i}_${pageCount}`}
            onClick={() => onChangePage(Number(pageCount))}
          >
            {pageCount}
          </Pagination.Item>
        );
      })}
      <Pagination.Next
        disabled={currentPage == lastPage}
        onClick={() => onChangePage(currentPage + 1)}
      />
    </Pagination>
  );
}

export default PaginationComponent;
