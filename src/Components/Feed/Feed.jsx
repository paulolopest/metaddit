import React from 'react';
import Post from './../Post/Post';

const Feed = (posts) => {
	const postMap = posts?.data?.data?.map((data) => <Post key={data.id} data={data} />);

	return <div className="feed-ctr">{postMap}</div>;
};

export default Feed;
