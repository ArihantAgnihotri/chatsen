import {AppBar, Toolbar, styled, Box } from '@mui/material';


//Components
import LoginDialog from "./Account/LoginDialog";
const Header = styled(AppBar)`
    height : 25vh;
    background-color : #A6E3E9;
    box-shadow: 0 0.1vh 10px rgb(44 79 81 /0.5);
`
const Component = styled(Box)`
height : 100vh;
background : #E3FDFD;
`
const Messenger = () => {
    return(
        <Component>
            <Header>
            <Toolbar>

            </Toolbar>
            </Header>
            <LoginDialog />
        </Component>
        
    );

}
export default Messenger;
