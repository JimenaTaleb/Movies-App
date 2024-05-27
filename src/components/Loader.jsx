//Importo componente desde React Spinners
import { Grid } from "react-loader-spinner";
import { styled } from "@mui/system";

const LoaderContainer = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 1000,
});

export default function Loader() {
  return (
    <LoaderContainer>
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
    </LoaderContainer>
  );
}
