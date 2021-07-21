import React from 'react';
import _ from 'lodash';

import {Link, withPrefix} from '../utils';

export default class BlogPostTags extends React.Component {
    render() {
        let tags = _.get(this.props, 'tags', null);
        return (
            _.map(tags, (tag, tag_idx) => {
                let tag_data = tag;
                return (
                	tag_data.link ? (
                		<Link key={tag_idx} className="mr-1" href={withPrefix(tag_data.link)}>{tag_data.title}</Link>
                	) : 
                		<span key={tag_idx + '.1'} className="mr-1">{tag_data.title}</span>
                )
            })
        );
    }
}
