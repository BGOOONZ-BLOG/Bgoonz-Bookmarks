import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix, getPages} from '../utils';
import BlogFeedItemFilter from './BlogFeedItemFilter';
import SectionActions from './SectionActions';

export default class BlogFeedSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let align_x = _.get(section, 'align', null) || 'center';
        let padding_top = _.get(section, 'padding_top', null) || 'medium';
        let padding_bottom = _.get(section, 'padding_bottom', null) || 'medium';
        let bg_color = _.get(section, 'background_color', null) || 'none';
        let bg_img_opacity_pct = _.get(section, 'background_image_opacity', null) || 100;
        let bg_img_opacity = bg_img_opacity_pct * 0.01;
        let bg_img_size = _.get(section, 'background_image_size', null) || 'cover';
        let bg_img_position = _.get(section, 'background_image_position', null) || 'center center';
        let bg_img_repeat = _.get(section, 'background_image_repeat', null) || 'no-repeat';
        let section_author = false;
        let section_category = false;
        let section_tag = false;
        let posts_all = getPages(this.props.pages, '/blog');
        let posts_sorted = _.orderBy(posts_all, 'date', 'desc');
        let show_recent = _.get(section, 'show_recent', null) || false;
        let recent_count = _.get(section, 'recent_count', null) || 0;
        let post_count = 0;
        if (_.get(section, 'author', null)) {
             section_author = _.get(section, 'author', null);
        }
        if (_.get(section, 'category', null)) {
             section_category = _.get(section, 'category', null);
        }
        if (_.get(section, 'tag', null)) {
             section_tag = _.get(section, 'tag', null);
        }
        return (
            <section className={classNames('section', 'blog-feed', {'has-border': _.get(section, 'has_border', null), 'has-cover': _.get(section, 'background_image', null), 'bg-none': bg_color === 'none', 'bg-primary': bg_color === 'primary', 'bg-secondary': bg_color === 'secondary', 'pt-4': padding_top === 'small', 'pt-6': (padding_top === 'medium') || (padding_top === 'large'), 'pt-md-7': padding_top === 'large', 'pb-4': padding_bottom === 'small', 'pb-6': (padding_bottom === 'medium') || (padding_bottom === 'large'), 'pb-md-7': padding_bottom === 'large'})}>
            	{_.get(section, 'background_image', null) && (
            	<div className="cover-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + '; background-size: ' + bg_img_size + '; background-repeat: ' + bg_img_repeat + '; background-position: ' + bg_img_position)}/>
            	)}
            	{(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
            	<div className={classNames('container', 'container--medium', 'mb-5', {'text-center': align_x === 'center', 'text-right': align_x === 'right'})}>
            		{_.get(section, 'subtitle', null) && (
            		<div className="section__subtitle">{_.get(section, 'subtitle', null)}</div>
            		)}
            		{_.get(section, 'title', null) && (
            		<h2 className="section__title mt-0">{_.get(section, 'title', null)}</h2>
            		)}
            	</div>
            	)}
            	<div className="container">
            		<div className="grid">
            			{_.map(posts_sorted, (post, post_idx) => {
            			    let is_post = false;
            			    if ((_.get(post, 'layout', null) === 'post')) {
            			         is_post = true;
            			    }
            			    return (<React.Fragment key={post_idx + '.1'}>
                				{(is_post && ((show_recent === false) || (post_count < recent_count))) && ((() => {
                				     post_count = post_count + 1;
                				    return (
                    				<BlogFeedItemFilter key={post_idx} {...this.props} blog_feed_section={section} post_page={post} section_author={section_author} section_category={section_category} section_tag={section_tag} />
                    				);
                				})())}
                			</React.Fragment>)
            			})}
            		</div>
            	</div>
            	{_.get(section, 'actions', null) && (
            	<div className="container container--medium mt-4">
            		<div className={classNames('section__actions', 'btn-group', {'justify-center': align_x === 'center', 'justify-end': align_x === 'right'})}>
            			<SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
            		</div>
            	</div>
            	)}
            </section>
        );
    }
}
