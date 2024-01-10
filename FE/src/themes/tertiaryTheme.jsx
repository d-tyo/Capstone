import { createTheme } from "@mui/material/styles";

export const tertiarySettings = {
    palette: {
        primary: {
            main: '#E9D2F1',
            contrastText: '#6F5D7A',
          },
          secondary: {
            main: '#C6E3D4',
            contrastText: '#4E6454',
        },
        mode: 'light'
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
export const tertiaryTheme = createTheme(tertiarySettings);