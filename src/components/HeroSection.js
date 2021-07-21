import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix, htmlToReact, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class HeroSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let padding_top = _.get(section, 'padding_top', null) || 'medium';
        let padding_bottom = _.get(section, 'padding_bottom', null) || 'medium';
        let align_x = _.get(section, 'align', null) || 'center';
        let bg_color = _.get(section, 'background_color', null) || 'none';
        let bg_img_opacity_pct = _.get(section, 'background_image_opacity', null) || 100;
        let bg_img_opacity = bg_img_opacity_pct * 0.01;
        let bg_img_size = _.get(section, 'background_image_size', null) || 'cover';
        let bg_img_position = _.get(section, 'background_image_position', null) || 'center center';
        let bg_img_repeat = _.get(section, 'background_image_repeat', null) || 'no-repeat';
        let has_text = false;
        let has_media = false;
        let media_width = _.get(section, 'media_width', null) || 'fifty';
        let media_pos = _.get(section, 'media_position', null) || 'top';
        let is_horiz = false;
        let is_vert = false;
        if ((((_.get(section, 'title', null) || _.get(section, 'subtitle', null)) || _.get(section, 'content', null)) || _.get(section, 'actions', null))) {
             has_text = true;
        }
        if ((_.get(section, 'image', null) || _.get(section, 'video_embed_html', null))) {
             has_media = true;
        }
        if (((has_media === false) || (has_text === false))) {
             media_pos = 'top';
        }
        if (((media_pos === 'left') || (media_pos === 'right'))) {
             is_horiz = true;
        }
        if (((media_pos === 'top') || (media_pos === 'bottom'))) {
             is_vert = true;
        }
        return (
            <React.Fragment>
                <section className={classNames('section', 'hero', {'has-border': _.get(section, 'has_border', null), 'has-cover': _.get(section, 'background_image', null), 'bg-none': bg_color === 'none', 'bg-primary': bg_color === 'primary', 'bg-secondary': bg_color === 'secondary', 'pt-4': padding_top === 'small', 'pt-6': (padding_top === 'medium') || (padding_top === 'large'), 'pt-md-7': padding_top === 'large', 'pb-4': padding_bottom === 'small', 'pb-6': (padding_bottom === 'medium') || (padding_bottom === 'large'), 'pb-md-7': padding_bottom === 'large'})}>
                	{_.get(section, 'background_image', null) && (
                	<div className="cover-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + '; background-size: ' + bg_img_size + '; background-repeat: ' + bg_img_repeat + '; background-position: ' + bg_img_position)}/>
                	)}
                	<div className={classNames('container', {'container--medium': is_vert})}>
                		<div className="hero__content grid items-center">
                			{has_media && (
                			<div className={classNames('hero__media', 'my-2', 'cell-12', {'cell-md-5': (is_horiz && has_text) && (media_width === 'fourty'), 'cell-md-6': (is_horiz && has_text) && (media_width === 'fifty'), 'cell-md-7': (is_horiz && has_text) && (media_width === 'sixty')})}>
                				{_.get(section, 'video_embed_html', null) ? (
                					htmlToReact(_.get(section, 'video_embed_html', null))
                				) : 
                					<img src={withPrefix(_.get(section, 'image', null))} alt={_.get(section, 'image_alt', null)} className={classNames({'mx-auto': align_x === 'center', 'ml-auto': align_x === 'right'})} />
                				}
                			</div>
                			)}
                			{has_text && (
                			<div className={classNames('hero__body', 'my-2', 'cell-12', {'cell-md-7': (is_horiz && has_media) && (media_width === 'fourty'), 'cell-md-6': (is_horiz && has_media) && (media_width === 'fifty'), 'cell-md-5': (is_horiz && has_media) && (media_width === 'sixty'), 'order-md-first': has_media && (media_pos === 'right'), 'order-first': has_media && (media_pos === 'bottom'), 'text-center': align_x === 'center', 'text-right': align_x === 'right'})}>
                				{_.get(section, 'title', null) && (
                				<h1 className="hero__title">{_.get(section, 'title', null)}</h1>
                				)}
                				{_.get(section, 'subtitle', null) && (
                				<p className="hero__subtitle">{_.get(section, 'subtitle', null)}</p>
                				)}
                				{_.get(section, 'content', null) && (
                				<div className="hero__copy">
                					{markdownify(_.get(section, 'content', null))}
                				</div>
                				)}
                				{_.get(section, 'actions', null) && (
                				<div className={classNames('hero__actions', 'btn-group', {'justify-center': align_x === 'center', 'justify-end': align_x === 'right'})}>
                					<SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                				</div>
                				)}
                			</div>
                			)}
                		</div>
                	</div>
                </section>
            </React.Fragment>
        );
    }
}
