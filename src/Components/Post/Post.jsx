import React from 'react';
import * as Icon from '@phosphor-icons/react';
import { Link, useParams } from 'react-router-dom';
import { calcTime, textLimit } from '../../Utils/Variables';

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
						Postado por <Link to={`/u/${data?.data.user.username}`}>u/{data?.data.user.username} </Link>
						{expendedTime}
					</p>

					<h1>{data?.data.title}</h1>
				</div>

				{data?.data.description ? (
					<div className="post-ctnt">{textLimit(data?.data.description, 1360)}</div>
				) : null}

				<div className="post-main-ftr">
					<div>
						<Icon.Chat />
						<p>{data?.data._count.Comment} Comentários</p>
					</div>

					<div>
						<Icon.ArchiveBox />
						<p>Salvar</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Post;
