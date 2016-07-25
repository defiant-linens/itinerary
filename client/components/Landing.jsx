var LandingView = () => (
	<div className='container'>
		<div className='jumbotron'>
			<h1 className='ole'>Wonder Wander <i className='fa fa-paper-plane-o smLogo' aria-hidden='true'></i></h1>
			<Link to='/choose-planner' className='btn btn-success'>Create Itinerary</Link><span>   </span>
			<Link to='/itineraries' className='btn btn-success'>View My Itineraries</Link>
		</div>
	</div>
);