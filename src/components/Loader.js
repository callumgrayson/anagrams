import React from 'react';

const Loader = (props) => {
	return (
		<div className="loaderBox">
			{props.isFetching && '...Loading list...'}
		</div>
	);
};

export default Loader;
