import React from 'react';
import _ from 'lodash';

import {Link, withPrefix, classNames} from '../utils';
import Icon from './Icon';

export default class Action extends React.Component {
    render() {
        let action = _.get(this.props, 'action', null);
        let action_style = _.get(action, 'style', null) || 'link';
        let action_icon_pos = _.get(action, 'icon_position', null) || 'right';
        return (
            <Link href={withPrefix(_.get(action, 'url', null))}
            	{...(_.get(action, 'new_window', null) ? ({target: '_blank'}) : null)}
            	{...((_.get(action, 'new_window', null) || _.get(action, 'no_follow', null)) ? ({rel: (_.get(action, 'new_window', null) ? ('noopener ') : '') + (_.get(action, 'no_follow', null) ? ('nofollow') : '')}) : null)}
            	className={classNames({'btn': ((action_style === 'primary') || (action_style === 'secondary')) || _.get(action, 'has_icon', null), 'btn--primary': action_style === 'primary', 'btn--secondary': action_style === 'secondary', 'btn--icon': _.get(action, 'has_icon', null) && (action_icon_pos === 'center'), 'btn--clear': _.get(action, 'has_icon', null) && (action_style === 'link')})}>
            	{_.get(action, 'has_icon', null) ? (<React.Fragment>
            		<Icon {...this.props} icon={_.get(action, 'icon', null)} />
            		<span className={classNames({'order-first': action_icon_pos === 'right', 'sr-only': action_icon_pos === 'center'})}>{_.get(action, 'label', null)}</span>
            	</React.Fragment>) : 
            		_.get(action, 'label', null)
            	}
            </Link>
        );
    }
}
