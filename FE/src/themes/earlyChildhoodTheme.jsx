import { createTheme } from "@mui/material/styles";


export const earlyChildhoodSettings = {
    palette: {
        primary: {
            main: '#FFD3E0',
            contrastText: '#7F6E82',
          },
          secondary: {
            main: '#AEC6CF',
            contrastText: '#485B6E',
          },
        
          mode: 'light',
        },
    typography: {
        // see https://blog.logrocket.com/add-custom-fonts-mui/#google-fonts-cdn for custom fonts
        // need to add <link href="https://fonts.googleapis.com/css2?family=Ubuntu&display=swap" rel="stylesheet"> to index.html
        fontFamily: 'Ubuntu',
        fontSize: 16,
        h1: {
            fontSize: 32
        }
    },
    shape: {
        borderRadius: 10
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
              a {
                color: #A663FF;
              }
            `,
        },        
        MuiButton: {
            defaultProps: {
                variant: 'contained'
            },
        },
        MuiTextField: {
            defaultProps: {
                variant: 'filled'
            }
        }
    }    
}

// creates a new theme containing overrides for any defaults
// see https://mui.com/material-ui/customization/theming/#theme-configuration-variables for more
export const earlyChildhoodTheme = createTheme(earlyChildhoodSettings);