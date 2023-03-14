// import { useContext } from 'react';
import { Dialog, Typography, List, ListItem, Box, styled } from '@mui/material';
import { qrCodeImage } from '../../constants/data';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

// import { addUser } from '../../service/api';
// import { AccountContext } from '../../context/AccountProvider';

const Component = styled(Box)`
    display: flex; 
    
`;


const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: '0 0.1vh 10px #018089',
    overflow: 'hidden',
    backgroundColor : '#283149'
}


const LoginDialog = () => {

    // const { setAccount,showloginButton, setShowloginButton, setShowlogoutButton } = useContext(AccountContext);

    const onLoginSuccess = (res) => {
        let decoded = jwt_decode(res.credential);
        // setAccount(decoded);
        // setShowloginButton(false);
        // setShowlogoutButton(true);
        // await addUser(decoded);
    }

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    }

    // const onSignoutSuccess = () => {
    //     alert("You have been logged out successfully");
    //     console.clear();
    //     setShowloginButton(true);
    //     setShowlogoutButton(false);
    // };

    return (

        <Dialog
        open={true}
        BackdropProps={{style: {backgroundColor: 'unset'}}}

        maxWidth={'md'}
        PaperProps={{ sx: dialogStyle }}
    >
        <Component>
            {/* <Container> */}
            <h1 className='title'>
      <span className='title-chat'>CHAT</span><span className='title-sen'>SEN</span>
    </h1>
            {/* </Container> */}
            
            <Box style={{ position: 'absolute', top : '40%', left : '38%'}}>
                    
                        <GoogleLogin
                            buttonText=""
                            onSuccess={onLoginSuccess}
                            onError={onLoginFailure}

                            />
                </Box>
            
        </Component>
    </Dialog>
    )
}

export default LoginDialog;