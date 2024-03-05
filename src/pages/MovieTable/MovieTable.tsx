import {
  Grid,
  GridColumn,
  GridToolbar,
  type GridPageChangeEvent,
} from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { useCallback, useEffect, useState } from "react";
import useSWR from "swr";
import type { Rateds } from "./Types";
import { Input, type InputChangeEvent } from "@progress/kendo-react-inputs";
import { Pagination } from "~/components";

const MovieTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState<number>(1);
  const [total, setTotal] = useState<number>(0);
  const { data } = useSWR<Rateds>(`/top_rated?language=pt-BR&page=${page}`, {
    suspense: true,
  });

  const handleSearchChange = useCallback(
    (event: InputChangeEvent) => {
      setSearchValue(String(event.target.value));
    },
    [setSearchValue],
  );

  useEffect(() => {
    if (data) {
      setTotal(data.total_results || 0);
    }
  }, [data]);

  return (
    <section className="flex flex-col h-[88vh] items-center justify-center">
      <Grid
        data={process(data?.results || [], {
          filter: {
            logic: "or",
            filters: [
              { field: "id", operator: "contains", value: searchValue },
              { field: "title", operator: "contains", value: searchValue },
              {
                field: "vote_average",
                operator: "contains",
                value: searchValue,
              },
              { field: "popularity", operator: "contains", value: searchValue },
              {
                field: "release_date",
                operator: "contains",
                value: searchValue,
              },
            ],
          },
        })}
        sortable={true}
        style={{ height: 600, border: "1px solid #ccc", padding: "4px" }}
      >
        <GridToolbar className="p-2 border-b">
          <Input
            className="border rounded-md pl-2"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder="Buscar..."
          />
        </GridToolbar>
        <GridColumn
          field="id"
          title="ID"
          width="90px"
          headerClassName="text-left"
        />
        <GridColumn
          field="title"
          title="Titulo"
          width="350px"
          headerClassName="text-left"
        />
        <GridColumn
          field="vote_average"
          title="Avaliação"
          width="100px"
          cell={(props) => <td>{props.dataItem.vote_average.toFixed(2)}</td>}
          headerClassName="text-left"
        />
        <GridColumn
          field="popularity"
          title="Popularidade"
          width="130px"
          headerClassName="text-left"
        />
        <GridColumn
          field="release_date"
          title="Data de Lançamento"
          width="170px"
          format="{0:dd/MM/yyyy}"
          headerClassName="text-left"
        />
      </Grid>
      {/* <div>
        {"<<"}
        {renderPageButtons()}
        {">>"} page {Math.floor(page.skip / page.take) + 1} de {totalPages}
      </div> */}
      <Pagination
        page={data?.page}
        setPage={setPage}
        total_pages={data?.total_pages}
        total_results={data?.total_results}
      />
    </section>
  );
};

export default MovieTable;
