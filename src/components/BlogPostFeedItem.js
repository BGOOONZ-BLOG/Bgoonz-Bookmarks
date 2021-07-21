import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {classNames, Link, withPrefix} from '../utils';
import BlogPostCategories from './BlogPostCategories';
import BlogPostAuthor from './BlogPostAuthor';

export default class BlogPostFeedItem extends React.Component {
    render() {
        let post = _.get(this.props, 'post_page', null);
        let blog_feed_section = _.get(this.props, 'blog_feed_section', null);
        let columns = _.get(blog_feed_section, 'blog_feed_cols', null) || 'three';
        let is_card = false;
        let has_image = false;
        let show_image = false;
        let no_image = false;
        let show_categories = false;
        if (_.get(blog_feed_section, 'enable_cards', null)) {
             is_card = true;
        }
        if (_.get(post, 'thumb_image', null)) {
             has_image = true;
        }
        if (_.get(blog_feed_section, 'show_image', null)) {
             show_image = true;
        }
        if (((has_image === false) || (show_image === false))) {
             no_image = true;
        }
        if ((_.get(blog_feed_section, 'show_categories', null) && _.get(post, 'categories', null))) {
             show_categories = true;
        }
        return (
            <React.Fragment>
                <article className={classNames('cell-12', 'cell-md-6', 'my-2', {'cell-lg-4': columns === 'three'})}>
                	<div className={classNames('item', {'card': is_card, 'card--highlight': is_card, 'card--vert': is_card})}>
                		<div className="flex flex-column">
                			{(has_image && show_image) && (
                			<div className={classNames('item__media', 'mb-3', {'card__media': is_card, 'card__media--fill': is_card, 'card__media--top': is_card})}>
                				<Link href={withPrefix(_.get(post, 'stackbit_url_path', null))}><img src={withPrefix(_.get(post, 'thumb_image', null))} alt={_.get(post, 'thumb_image_alt', null)} /></Link>
                			</div>
                			)}
                			<div className={classNames('item__body', {'px-3': is_card, 'pb-3': is_card, 'pt-3': is_card && no_image, 'px-sm-4': is_card, 'pb-sm-4': is_card, 'pt-4': is_card && no_image})}>
                				{(_.get(blog_feed_section, 'show_date', null) || show_categories) && (
                				<div className="item__meta mb-1">
                					{show_categories && (<React.Fragment>
                						<BlogPostCategories {...this.props} categories={_.get(post, 'categories', null)} container_class={'item__cat'} />
                						{_.get(blog_feed_section, 'show_date', null) && (
                							<span className="item__meta-sep"> &middot; </span>
                						)}
                					</React.Fragment>)}
                					{_.get(blog_feed_section, 'show_date', null) && (
                						<span className="item__date"><time dateTime={moment(_.get(post, 'date', null)).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'date', null)).strftime('%B %d, %Y')}</time></span>
                					)}
                				</div>
                				)}
                				{_.get(blog_feed_section, 'title', null) ? (
                					<h3 className={classNames('item__title', 'mt-0', {'h3': columns === 'two', 'h4': columns === 'three'})}><Link href={withPrefix(_.get(post, 'stackbit_url_path', null))}>{_.get(post, 'title', null)}</Link></h3>
                				) : 
                					<h2 className={classNames('item__title', 'mt-0', {'h3': columns === 'two', 'h4': columns === 'three'})}><Link href={withPrefix(_.get(post, 'stackbit_url_path', null))}>{_.get(post, 'title', null)}</Link></h2>
                				}
                				{(_.get(blog_feed_section, 'show_excerpt', null) && _.get(post, 'excerpt', null)) && (
                				<div className="item__copy">
                					<p>{_.get(post, 'excerpt', null)}</p>
                				</div>
                				)}
                				{(_.get(blog_feed_section, 'show_author', null) && _.get(post, 'author', null)) && (
                					<BlogPostAuthor {...this.props} author={_.get(post, 'author', null)} container_class={'item__byline'} avatar_size={'small'} />
                				)}
                			</div>
                		</div>
                	</div>
                </article>
            </React.Fragment>
        );
    }
}
