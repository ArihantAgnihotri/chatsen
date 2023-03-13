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

const Container = styled(Box)`
    padding: 56px 0 56px 56px;
`;

const QRCOde = styled('img')({
    margin: '50px 0 0 50px',
    height: 264,
    width: 264
});

const Title = styled(Typography)`
    font-size: 300%;
    padding : 2%;
    margin : auto;
    color: #373A40;
    font-family: Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif;
    font-weight: 600;
    letter-spacing : 10px;
`;


const dialogStyle = {
    marginTop: '12%',
    height: '95%',
    width: '60%',
    maxWidth: '100',
    maxHeight: '100%',
    borderRadius: 0,
    boxShadow: 'none',
    overflow: 'hidden'
}

const StyledList = styled(List)`
    &  > li {
        padding: 0;
        margin-top: 15px;
        font-size: 18px;
        line-height: 28px;
        color: #4a4a4a;
    }
`;

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
        // <Dialog
        //     open={true}
        //     BackdropProps={{style: {backgroundColor: 'unset'}}}
        //     maxWidth={'md'}
        //     PaperProps={{ sx: dialogStyle }}
        // >
        //     <Component>
        //             
                    
                
        //         <Box>
        //             <Box style={{position: 'absolute', top: '50%', transform: 'translateX(25%) translateY(-25%)'}}>
        //                     <GoogleLogin
        //                         onSuccess={onLoginSuccess}
        //                         onError={onLoginFailure}
        //                     />
        //             </Box>
        //         </Box>
        //     </Component>
        // </Dialog>



        <Dialog
        open={true}
        BackdropProps={{style: {backgroundColor: 'unset'}}}
        maxWidth={'md'}
        PaperProps={{ sx: dialogStyle }}
    >
        <Component>
            {/* <Container> */}
            <Title>CHATSEN</Title>
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