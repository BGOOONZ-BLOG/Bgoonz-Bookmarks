import React from 'react';
import _ from 'lodash';

import {classNames, toStyleObj, withPrefix, markdownify} from '../utils';
import FormField from './FormField';

export default class FormSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let padding_top = _.get(section, 'padding_top', null) || 'medium';
        let padding_bottom = _.get(section, 'padding_bottom', null) || 'medium';
        let bg_color = _.get(section, 'background_color', null) || 'none';
        let bg_img_opacity_pct = _.get(section, 'background_image_opacity', null) || 100;
        let bg_img_opacity = bg_img_opacity_pct * 0.01;
        let bg_img_size = _.get(section, 'background_image_size', null) || 'cover';
        let bg_img_position = _.get(section, 'background_image_position', null) || 'center center';
        let bg_img_repeat = _.get(section, 'background_image_repeat', null) || 'no-repeat';
        let align_y = _.get(section, 'align_vert', null) || 'top';
        let title_align_x = _.get(section, 'title_align', null) || 'left';
        let content_align_x = _.get(section, 'content_align', null) || 'left';
        let has_text = false;
        let form_layout = _.get(section, 'form_layout', null) || 'stacked';
        let form_width = _.get(section, 'form_width', null) || 'fifty';
        let form_pos = _.get(section, 'form_position', null) || 'bottom';
        let form_is_card = false;
        let is_horiz = false;
        let is_vert = false;
        let form_field_count = 0;
        let form_is_inline = false;
        if (_.get(section, 'content', null)) {
             has_text = true;
        }
        if ((has_text === false)) {
             form_pos = 'bottom';
        }
        if (_.get(section, 'enable_card', null)) {
             form_is_card = true;
        }
        if (((form_pos === 'left') || (form_pos === 'right'))) {
             is_horiz = true;
        }
        if (((form_pos === 'top') || (form_pos === 'bottom'))) {
             is_vert = true;
        }
        if (_.get(section, 'form_fields', null)) {
             form_field_count = _.size(_.get(section, 'form_fields', null));
        }
        if (((form_field_count < 2) && (form_layout === 'inline'))) {
             form_is_inline = true;
        }
        return (
            <React.Fragment>
                <section className={classNames('section', {'has-border': _.get(section, 'has_border', null), 'has-cover': _.get(section, 'background_image', null), 'bg-none': bg_color === 'none', 'bg-primary': bg_color === 'primary', 'bg-secondary': bg_color === 'secondary', 'pt-4': padding_top === 'small', 'pt-6': (padding_top === 'medium') || (padding_top === 'large'), 'pt-md-7': padding_top === 'large', 'pb-4': padding_bottom === 'small', 'pb-6': (padding_bottom === 'medium') || (padding_bottom === 'large'), 'pb-md-7': padding_bottom === 'large'})}>
                	{_.get(section, 'background_image', null) && (
                	<div className="cover-img" style={toStyleObj('background-image: url(\'' + withPrefix(_.get(section, 'background_image', null)) + '\'); opacity: ' + bg_img_opacity + '; background-size: ' + bg_img_size + '; background-repeat: ' + bg_img_repeat + '; background-position: ' + bg_img_position)}/>
                	)}
                	{(_.get(section, 'title', null) || _.get(section, 'subtitle', null)) && (
                	<div className={classNames('container', 'container--medium', 'mb-3', {'text-center': title_align_x === 'center', 'text-right': title_align_x === 'right'})}>
                		{_.get(section, 'subtitle', null) && (
                		<div className="section__subtitle">{_.get(section, 'subtitle', null)}</div>
                		)}
                		{_.get(section, 'title', null) && (
                		<h2 className="section__title mt-0">{_.get(section, 'title', null)}</h2>
                		)}
                	</div>
                	)}
                	<div className={classNames('container', {'container--medium': is_vert})}>
                		<div className={classNames('section__content', 'grid', {'items-center': is_horiz && (align_y === 'middle'), 'items-end': is_horiz && (align_y === 'bottom')})}>
                			{has_text && (
                			<div className={classNames('section__copy', 'my-2', 'cell-12', {'cell-md-7': is_horiz && (form_width === 'fourty'), 'cell-md-6': is_horiz && (form_width === 'fifty'), 'cell-md-5': is_horiz && (form_width === 'sixty'), 'text-center': content_align_x === 'center', 'text-right': content_align_x === 'right'})}>
                				{markdownify(_.get(section, 'content', null))}
                			</div>
                			)}
                			<div className={classNames('section__form', 'my-2', 'cell-12', {'cell-md-5': (is_horiz && has_text) && (form_width === 'fourty'), 'cell-md-6': (is_horiz && has_text) && (form_width === 'fifty'), 'cell-md-7': (is_horiz && has_text) && (form_width === 'sixty'), 'order-first': (form_pos === 'top') || (form_pos === 'left')})}>
                				<form name={_.get(section, 'form_id', null)} id={_.get(section, 'form_id', null)}{...(_.get(section, 'form_action', null) ? ({action: _.get(section, 'form_action', null)}) : null)} method="POST" data-netlify="true" data-netlify-honeypot={_.get(section, 'form_id', null) + '-bot-field'} className={classNames({'form-inline': form_is_inline, 'card': form_is_card, 'p-4': form_is_card, 'p-sm-5': form_is_card})}>
                					<div className="sr-only">
                						<label id={_.get(section, 'form_id', null) + '-honeypot-label'} htmlFor={_.get(section, 'form_id', null) + '-honeypot'}>Don't fill this out if you're human:</label>
                						<input aria-labelledby={_.get(section, 'form_id', null) + '-honeypot-label'} id={_.get(section, 'form_id', null) + '-honeypot'} name={_.get(section, 'form_id', null) + '-bot-field'} />
                					</div>
                					<input aria-labelledby={_.get(section, 'form_id', null) + '-honeypot-label'} type="hidden" name="form-name" value={_.get(section, 'form_id', null)} />
                					<div className={classNames('form-content', {'flex': form_is_inline, 'flex-column': form_is_inline, 'flex-xs-row': form_is_inline})}>
                						{_.get(section, 'form_fields', null) && (
                							_.map(_.get(section, 'form_fields', null), (field, field_idx) => (
                							<div key={field_idx} className={classNames('form-group', {'mb-2': form_is_inline === false, 'mb-1': form_is_inline === true, 'mb-xs-0': form_is_inline === true, 'flex-auto': form_is_inline})}>
                								<FormField {...this.props} field={field} />
                							</div>
                							))
                						)}
                						<div className={classNames('form-submit', {'mt-3': form_is_inline === false, 'mx-auto': form_is_inline === true, 'mr-xs-0': form_is_inline === true, 'ml-xs-1': form_is_inline === true})}>
                							<button type="submit" className="btn btn--primary">{_.get(section, 'submit_label', null)}</button>
                						</div>
                					</div>
                				</form>
                			</div>
                		</div>
                	</div>
                </section>
            </React.Fragment>
        );
    }
}
