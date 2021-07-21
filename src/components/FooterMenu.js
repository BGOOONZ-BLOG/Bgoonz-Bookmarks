import React from 'react';
import _ from 'lodash';

import Action from './Action';

export default class FooterMenu extends React.Component {
    render() {
        let menu = _.get(this.props, 'footer_menu', null);
        return (
            <ul className="menu">
            {_.map(menu, (menu_item, menu_item_idx) => (
            	<li key={menu_item_idx} className="menu__item mb-1">
            		<Action {...this.props} action={menu_item} />
            	</li>
            ))}
            </ul>
        );
    }
}
