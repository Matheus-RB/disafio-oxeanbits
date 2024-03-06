import { Grid, GridColumn, GridToolbar } from "@progress/kendo-react-grid";
import { process } from "@progress/kendo-data-query";
import { useCallback, useState } from "react";
import useSWR from "swr";
import type { Rateds } from "./Types";
import { Input, type InputChangeEvent } from "@progress/kendo-react-inputs";
import { Pagination } from "~/components";

const MovieTable = () => {
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState<number>(1);
  const { data } = useSWR<Rateds>(`/top_rated?language=pt-BR&page=${page}`, {
    suspense: true,
  });

  const handleSearchChange = useCallback(
    (event: InputChangeEvent) => {
      setSearchValue(String(event.target.value));
    },
    [setSearchValue],
  );

  return (
    <div className="flex h-[88vh] items-center justify-center">
      <div className="w-max flex flex-col items-center justify-center">
        <div className="absolute overflow-auto">
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
                  {
                    field: "popularity",
                    operator: "contains",
                    value: searchValue,
                  },
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
              cell={(props) => (
                <td>{props.dataItem.vote_average.toFixed(2)}</td>
              )}
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
          <div className="flex items-center justify-end w-full">
            <Pagination
              page={page}
              setPage={setPage}
              total_pages={data?.total_pages || 1}
              total_results={data?.total_results || 20}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieTable;
