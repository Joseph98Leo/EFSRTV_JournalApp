import { Box, Toolbar } from "@mui/material"
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}
      className='animate__animated animate__fadeIn animate__faster'
    > {/* Es como un Div */}

      <NavBar drawerWidth={ drawerWidth } />

      <SideBar drawerWidth={ drawerWidth } />
      {/* SIDEBAR drawerWidth */}

      <Box
        component='main' // Es una estiqueta main gracias al component
        sx={{ flexGrow: 1, p: 3 }}
      >
        <Toolbar />

        { children }

      </Box>

    </Box>
  )
}
