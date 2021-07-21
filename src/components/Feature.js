import React from 'react';
import _ from 'lodash';

import {classNames, htmlToReact, withPrefix, markdownify} from '../utils';
import SectionActions from './SectionActions';

export default class Feature extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        let feature = _.get(this.props, 'feature', null);
        let padding_y = _.get(section, 'feature_padding_vert', null) || 'medium';
        let align_x = _.get(feature, 'align', null) || 'left';
        let has_text = false;
        let has_media = false;
        let media_width = _.get(feature, 'media_width', null) || 'fifty';
        let media_pos = _.get(feature, 'media_position', null) || 'top';
        let is_horiz = false;
        let is_vert = false;
        if ((((_.get(feature, 'title', null) || _.get(feature, 'subtitle', null)) || _.get(feature, 'content', null)) || _.get(feature, 'actions', null))) {
             has_text = true;
        }
        if ((_.get(feature, 'image', null) || _.get(feature, 'video_embed_html', null))) {
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
                <div className={classNames('feature', {'maxw-medium': is_vert, 'mx-auto': is_vert, 'py-0': padding_y === 'small', 'py-1': padding_y !== 'small', 'py-sm-3': padding_y === 'large'})}>
                	<div className="item__content grid items-center">
                		{has_media && (
                		<div className={classNames('feature__media', 'my-2', 'cell-12', {'cell-md-4': (is_horiz && has_text) && (media_width === 'thirty-three'), 'cell-md-5': (is_horiz && has_text) && (media_width === 'fourty'), 'cell-md-6': (is_horiz && has_text) && (media_width === 'fifty'), 'cell-md-7': (is_horiz && has_text) && (media_width === 'sixty')})}>
                			{_.get(feature, 'video_embed_html', null) ? (
                				htmlToReact(_.get(feature, 'video_embed_html', null))
                			) : 
                				<img src={withPrefix(_.get(feature, 'image', null))} alt={_.get(feature, 'image_alt', null)} className={classNames({'mx-auto': align_x === 'center', 'ml-auto': align_x === 'right'})} />
                			}
                		</div>
                		)}
                		{has_text && (
                		<div className={classNames('feature__body', 'my-2', 'cell-12', {'cell-md-8': (is_horiz && has_media) && (media_width === 'thirty-three'), 'cell-md-7': (is_horiz && has_media) && (media_width === 'fourty'), 'cell-md-6': (is_horiz && has_media) && (media_width === 'fifty'), 'cell-md-5': (is_horiz && has_media) && (media_width === 'sixty'), 'order-md-first': has_media && (media_pos === 'right'), 'order-first': has_media && (media_pos === 'bottom'), 'text-center': align_x === 'center', 'text-right': align_x === 'right'})}>
                			{_.get(feature, 'title', null) && (
                				_.get(section, 'title', null) ? (
                				<h3 className="feature__title h2">{_.get(feature, 'title', null)}</h3>
                				) : 
                				<h2 className="feature__title h2">{_.get(feature, 'title', null)}</h2>
                			)}
                			{_.get(feature, 'subtitle', null) && (
                			<p className="feature__subtitle">{_.get(feature, 'subtitle', null)}</p>
                			)}
                			{_.get(feature, 'content', null) && (
                			<div className="feature__copy">
                				{markdownify(_.get(feature, 'content', null))}
                			</div>
                			)}
                			{_.get(feature, 'actions', null) && (
                			<div className={classNames('feature__actions', 'btn-group', {'justify-center': align_x === 'center', 'justify-end': align_x === 'right'})}>
                				<SectionActions {...this.props} actions={_.get(feature, 'actions', null)} />
                			</div>
                			)}
                		</div>
                		)}
                	</div>
                </div>
            </React.Fragment>
        );
    }
}
