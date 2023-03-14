import {AppBar, Toolbar, styled, Box } from '@mui/material';


//Components
import LoginDialog from "./Account/LoginDialog";
const Header = styled(AppBar)`
    height : 20vh;
    background-color : #00818A;
    box-shadow: 0 0.1vh 10px rgb(44 79 81 /0.5);
`
const Component = styled(Box)`
height : 100vh;
background : #283149;
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
