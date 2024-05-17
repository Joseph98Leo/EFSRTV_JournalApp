import { Grid, Typography } from "@mui/material"

export const AuthLayout = ({ children, title = '' }) => {
  return (
    <Grid // Parecido a un div pero con propiedades interesantes
      container
      spacing={ 0 } // espaciado entre los hijos
      direction="column"    // implicitamente es como ponerle un flexbox
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}                 // style xtended, tenemos acceso al themeProvider
    > 
      <Grid item
        className="box-shadow"
        xs={ 3 }      // hace referencia a pantallas pequeñas ( el 3 hace referencia a las posiciones )
        sx={{
          width: { sm: 450 },
          backgroundColor: 'white',
          padding: 3,
          borderRadius: 2
        }}
      >
        <Typography variant='h5' sx={{ mb: 1 }}>{ title }</Typography>
            {/* Children */}
            { children }
        </Grid>
    </Grid>
  )
}
