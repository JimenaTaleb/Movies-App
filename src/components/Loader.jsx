//Importo componente desde React Spinners
import { Grid } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <Grid
        visible={true}
        height="80"
        width="80"
        color="#231841"
        ariaLabel="grid-loading"
        radius="12.5"
        wrapperStyle={{}}
        wrapperClass="grid-wrapper"
      />
    </div>
  );
}
