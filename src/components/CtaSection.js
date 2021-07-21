import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class CtaSection extends React.Component {
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
        let has_actions = false;
        let actions_width = _.get(section, 'actions_width', null) || 'fifty';
        let actions_pos = _.get(section, 'actions_position', null) || 'bottom';
        let is_horiz = false;
        let is_vert = false;
        if ((_.get(section, 'title', null) || _.get(section, 'content', null))) {
             has_text = true;
        }
        if (_.get(section, 'actions', null)) {
             has_actions = true;
        }
        if (((has_actions === false) || (has_text === false))) {
             actions_pos = 'bottom';
        }
        if (((actions_pos === 'left') || (actions_pos === 'right'))) {
             is_horiz = true;
        }
        if (((actions_pos === 'top') || (actions_pos === 'bottom'))) {
             is_vert = true;
        }
        return (
            <React.Fragment>
                <section className={classNames('section', 'cta', {'has-border': _.get(section, 'has_border', null), 'has-cover': _.get(section, 'background_image', null), 'bg-none': bg_color === 'none', 'bg-primary': bg_color === 'primary', 'bg-secondary': bg_color === 'secondary', 'pt-4': padding_top === 'small', 'pt-6': (padding_top === 'medium') || (padding_top === 'large'), 'pt-md-7': padding_top === 'large', 'pb-4': padding_bottom === 'small', 'pb-6': (padding_bottom === 'medium') || (padding_bottom === 'large'), 'pb-md-7': padding_bottom === 'large'})}>
                	{_.get(section, 'background_image', null) && (
                	<div className="cover-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + '; background-size: ' + bg_img_size + '; background-repeat: ' + bg_img_repeat + '; background-position: ' + bg_img_position)}/>
                	)}
                	<div className={classNames('container', {'container--medium': is_vert})}>
                		<div className="cta__content grid items-center">
                			{has_text && (
                			<div className={classNames('cta__body', 'my-1', 'cell-12', {'cell-md-7': (is_horiz && has_actions) && (actions_width === 'fourty'), 'cell-md-6': (is_horiz && has_actions) && (actions_width === 'fifty'), 'cell-md-5': (is_horiz && has_actions) && (actions_width === 'sixty'), 'text-center': align_x === 'center', 'text-right': align_x === 'right'})}>
                				{_.get(section, 'title', null) && (
                				<h1 className="cta__title">{_.get(section, 'title', null)}</h1>
                				)}
                				{_.get(section, 'content', null) && (
                				<div className="cta__copy">
                					{markdownify(_.get(section, 'content', null))}
                				</div>
                				)}
                			</div>
                			)}
                			{has_actions && (
                			<div className={classNames('cta__actions', 'my-1', 'cell-12', {'cell-md-5': (is_horiz && has_text) && (actions_width === 'fourty'), 'cell-md-6': (is_horiz && has_text) && (actions_width === 'fifty'), 'cell-md-7': (is_horiz && has_text) && (actions_width === 'sixty'), 'order-md-first': has_actions && (actions_pos === 'left'), 'order-first': has_actions && (actions_pos === 'top')})}>
                				<div className={classNames('cta__actions', 'btn-group', {'justify-md-center': is_horiz, 'justify-center': align_x === 'center', 'justify-end': align_x === 'right'})}>
                					<SectionActions {...this.props} actions={_.get(section, 'actions', null)} />
                				</div>
                			</div>
                			)}
                		</div>
                	</div>
                </section>
            </React.Fragment>
        );
    }
}
