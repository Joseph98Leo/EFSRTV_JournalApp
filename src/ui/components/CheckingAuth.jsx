import { CircularProgress, Grid } from "@mui/material"



export const CheckingAuth = () => {
  return (
    <Grid // Parecido a un div pero con propiedades interesantes
      container
      spacing={ 0 } // espaciado entre los hijos
      direction="column"    // implicitamente es como ponerle un flexbox
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}                 // style xtended, tenemos acceso al themeProvider
    > 
  
      <Grid container
        direction='row'
        justifyContent='center'
      >
        <CircularProgress color="warning" />  
      </Grid>
    </Grid>
  )
}
