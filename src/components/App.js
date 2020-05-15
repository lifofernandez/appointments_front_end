import React from 'react'
import AddAppointment from '../containers/AddAppointment'
import FilterMenu from '../components/FilterMenu'
import VisibleAppointmentList from '../containers/VisibleAppointmentList'

import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';

import Form from 'react-bootstrap/Form'

function AlertDismissibleExample() {
  const [show, setShow] = React.useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        <Alert.Heading>HELLo tHERE</Alert.Heading>
        <p>
	    Alerta Dismissible.
        </p>
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Mostar Alerta</Button>;
}


const App = () => (
	<div>
		<header>
			<AlertDismissibleExample />
		</header>

		<div class="row">
			<div class="col col-sm-4">
				<AddAppointment />

				
				<Form>
				  <Form.Group controlId="formBasicEmail">
				    <Form.Label>Email address</Form.Label>
				    <Form.Control type="email" placeholder="Enter email" />
				    <Form.Text className="text-muted">
				      We'll never share your email with anyone else.
				    </Form.Text>
				  </Form.Group>
				
				  <Form.Group controlId="formBasicPassword">
				    <Form.Label>Password</Form.Label>
				    <Form.Control type="password" placeholder="Password" />
				  </Form.Group>
				  <Form.Group controlId="formBasicCheckbox">
				    <Form.Check type="checkbox" label="Check me out" />
				  </Form.Group>
				  <Button variant="primary" type="submit">
				    Submit
				  </Button>
				</Form>
			</div>

			<div class="col col-sm-8">
				<FilterMenu />
				<VisibleAppointmentList />
			</div>
		</div>
	</div>
)

export default App
