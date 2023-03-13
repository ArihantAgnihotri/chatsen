import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';


function App() {
  const client_id = '662808130025-iofkcrpmrt29em6btafujrjtk9f0gpg1.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={client_id}><Messenger /></GoogleOAuthProvider>
  );
}

export default App;
