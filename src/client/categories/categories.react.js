import Component from '../components/component.react';
import React from 'react';

export default class Categories extends Component {

    static propTypes = {
        actions: React.PropTypes.object.isRequired,
        data: React.PropTypes.array.isRequired,
        isLoaded: React.PropTypes.bool.isRequired
    };

    componentWillMount() {
        this.props.actions.loadCategories();
    }

    renderCategories(parentId) {
        let children = this.returnChildren(parentId);
        return {
            categories: children.map(function (category) {
                let categories = this.renderCategories(category.id);
                return (
                    <li>
                        {category.name}
                        <ul>{categories}</ul>
                    </li>
                );
            }.bind(this))
        }
    }

    returnChildren(parentId) {
        let children = [];
        this.props.data.map(function(category) {
            if (category.parentId === parentId) {
                children.push(category);
            }
        }.bind(parentId));
        return children;
    }

    render() {
        const categories = this.renderCategories(null);
        return (
            this.props.isLoaded && <ul>{categories}</ul>
        );
    }

}
