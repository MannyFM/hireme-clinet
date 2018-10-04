import React from 'react'
import {Button, Form, Grid, Header, Image, Message, Segment} from 'semantic-ui-react'
import "./user.css"

class LoginForm extends React.Component {
	render() {
		return (
			<div className='login-form'>
				<Grid textAlign='center' style={{height: '100%'}} verticalAlign='middle'>
					<Grid.Column style={{maxWidth: 450}}>
						<Header as='h2' color='teal' textAlign='center'>
							<Image src='/logo-placeholder.png'/> Log-in to your account
						</Header>
						<Form size='large'>
							<Segment stacked>
								<Form.Input fluid icon='user' iconPosition='left' placeholder='Username'/>
								<Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password'/>

								<Button color='teal' fluid size='large'>
									Login
								</Button>
							</Segment>
						</Form>
						<Message>
							New to us? <a href='/register'>Sign Up</a>
						</Message>
					</Grid.Column>
				</Grid>
			</div>
		)
	}
}

export default LoginForm