import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';

export default class BlogPostAuthor extends React.Component {
    render() {
        let author = _.get(this.props, 'author', null);
        let container_class = _.get(this.props, 'container_class', null);
        let avatar_size = _.get(this.props, 'avatar_size', null);
        let author_data = author;
        return (
            <div className={container_class}>
            	{author_data.link ? (
            	<Link className="flex items-center" href={withPrefix(author_data.link)}>
            		{author_data.photo && (
            		<figure className={classNames('avatar', 'mr-1', {'avatar--small': avatar_size === 'small'})}>
            			<img className="avatar__img" src={withPrefix(author_data.photo)} alt={author_data.photo_alt} />
            		</figure>
            		)}
            		<span>{author_data.first_name} {author_data.last_name}</span>
            	</Link>
            	) : 
            	<div className="flex items-center">
            		{author_data.photo && (
            		<figure className={classNames('avatar', 'mr-2', {'avatar--small': avatar_size === 'small'})}>
            			<img className="avatar__img" src={withPrefix(author_data.photo)} alt={author_data.photo_alt} />
            		</figure>
            		)}
            		<span>{author_data.first_name} {author_data.last_name}</span>
            	</div>
            	}
            </div>
        );
    }
}
