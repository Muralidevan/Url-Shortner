// import React, { Component, Fragment } from 'react'

// import './App.css'
// class App extends Component {
// 	constructor(props) {
// 		super(props)
// 		this.state = {
// 			name: '',
// 			greeting: '',
// 		}
// 		this.handleChange = this.handleChange.bind(this)
// 		this.handleSubmit = this.handleSubmit.bind(this)
// 	}

// 	handleChange(event) {
// 		this.setState({ name: event.target.value })
// 	}

// 	handleSubmit(event) {
// 		event.preventDefault()
// 		fetch(`/api/greeting?name=${encodeURIComponent(this.state.name)}`)
// 			.then((response) => response.json())
// 			.then((state) => this.setState(state))
// 	}
// 	render() {
// 		return (
// 			<div className='App'>
// 				<header className='App-header'>
// 					<form onSubmit={this.handleSubmit}>
// 						<label htmlFor='name'>Enter your name: </label>
// 						<input
// 							id='name'
// 							type='text'
// 							value={this.state.name}
// 							onChange={this.handleChange}
// 						/>
// 						<button type='submit'>Submit</button>
// 					</form>
// 					<p>{this.state.greeting}</p>
// 					<a
// 						className='App-link'
// 						href='https://reactjs.org'
// 						target='_blank'
// 						rel='noopener noreferrer'
// 					>
// 						Learn React
// 					</a>
// 				</header>
// 			</div>
// 		)
// 	}
// }

// export default App
import React, { Fragment } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import SendIcon from '@material-ui/icons/Send'

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 2,
		backgroundColor: '#424242',
		marginTop: 300,
	},
	button: {
		margin: theme.spacing(3),
		backgroundColor: '#76ff03',
		marginLeft: 600,
		width: 300,
		fontSize: 22,
	},
	// containedPrimary: {
	// 	'&$containedPrimary: MuiButton-containedPrimary': {
	// 		backgroundColor: '#49bb7b',
	// 	},
	//},

	paper: {
		padding: theme.spacing(2),
		textAlign: 'center',
		color: theme.palette.text.secondary,
		fontFamily: 'Helvetica Neue',
		fontStyle: 'normal',
		fontDisplay: 'swap',
		fontWeight: 500,
		fontSize: 22,
		width: 1300,
		marginLeft: 20,
	},
	paperRoot: {
		backgroundColor: '#33eaff',
	},
}))

export default function AutoGrid() {
	const classes = useStyles()

	return (
		<div className={classes.root}>
			<Grid container spacing={3}>
				<Grid item xs>
					<Paper className={classes.paper}>
						https://www.amazon.in/gp/product/B085VTLD43?pf_rd_r=MV8SV74D900FNTWRWSMT&pf_rd_p=649eac15-05ce-45c0-86ac-3e413b8ba3d4
					</Paper>
				</Grid>
				<Fragment>
					<Button
						variant='contained'
						className={classes.button}
						//	endIcon={<SendIcon>send</SendIcon>}
						onClick={() => {
							alert('clicked')
						}}
					>
						<SendIcon> Make It Tiny!</SendIcon>
					</Button>
				</Fragment>
				<Grid item xs>
					<Paper className={classes.paper}>Hello Hi this NEw Link</Paper>
				</Grid>
			</Grid>
		</div>
	)
}
