import { RouterProvider } from "react-router-dom";

import router from "./routes";
import { SWRConfig } from "swr";
import api from "./services/api";

const App = () => {
  return (
    <SWRConfig
    value={{
      revalidateOnFocus: false,
      fetcher: (url: string) => api.get(url).then(res => res.data),
    }}
  >
    <RouterProvider router={router} />
  </SWRConfig> 
  )
};

export default App;
