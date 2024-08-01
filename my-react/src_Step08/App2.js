//Alert
import 'bootstrap/dist/css/bootstrap.css'
import { Alert, Container } from 'react-bootstrap';

function App2() {
    return (
        <Container>
            <AlertSample/>
        </Container>
    );
}

function AlertSample() {
    return (
      <>
        {[
          'primary',
          'secondary',
          'success',
          'danger',
          'warning',
          'info',
          'light',
          'dark',
        ].map((variant) => (
          <Alert key={variant} variant={variant}>
            This is a {variant} alert with{' '}
            <Alert.Link href="#">an example link</Alert.Link>. Give it a click if
            you like.
          </Alert>
        ))}
      </>
    );
  }


export default App2;