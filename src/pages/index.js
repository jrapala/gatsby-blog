import React, { Fragment } from 'react'
import { Link } from 'gatsby'

export default () => (
	<Fragment>
		<div>Home</div>
		<p>Hello Minnesota!</p>
		<Link to="/about">Learn about me &rarr;</Link>
	</Fragment>
)
