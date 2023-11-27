import React from 'react';
import * as Icon from '@phosphor-icons/react';
import { useParams } from 'react-router-dom';
import { calcTime } from '../../Utils/Variables';

const Post = (data, key) => {
	const params = useParams()['*'];

	const expendedTime = calcTime(data?.data.created_at);

	return (
		<div key={key} className="post-ctr">
			<div className="post-side">
				<Icon.ArrowFatUp color="#878a8c" />

				<p>{data?.data.votes}</p>

				<Icon.ArrowFatDown color="#878a8c" />
			</div>

			<div className="post-main">
				<div className="post-main-hdr">
					<p>
						Postado por{' '}
						<span>
							u/{data?.data.user.username} {expendedTime}
						</span>
					</p>

					<h1>{data?.data.title}</h1>
				</div>

				<div></div>

				<div>
					<div></div>
					<div></div>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Post;
