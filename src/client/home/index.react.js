import Component from '../components/component.react';
import DocumentTitle from 'react-document-title';
import React from 'react';
import {FormattedHTMLMessage} from 'react-intl';
import {Link} from 'react-router';
import Categories from '../categories/categories.react';

export default class Index extends Component {

  static propTypes = {
    msg: React.PropTypes.object.isRequired
  }

  render() {
    const {msg: {home: msg}} = this.props;

    return (
      <DocumentTitle title={msg.title}>
        <div className="home-page">
          <p>
            <FormattedHTMLMessage message={msg.infoHtml} />{' '}
            <Link to="todos">{msg.todos}</Link>.
            <Categories actions={this.props.actions.categories} data={this.props.categories.data} isLoaded={this.props.categories.isLoaded}/>
          </p>
        </div>
      </DocumentTitle>
    );
  }

}
