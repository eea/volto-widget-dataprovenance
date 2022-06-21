import React from 'react';
import cx from 'classnames';
import { List } from 'semantic-ui-react';

const DataProvenanceWidgetView = ({ value, className }) =>
  value?.data ? (
    <List className={cx(className, 'widget')}>
      {value.data.map((item, index) => (
        <List.Item>
          <List.Header key={index}>{item.title}</List.Header>
          <List.Content key={index}>
            <a href={item.link}>{item.link}</a>
          </List.Content>
          <List.Description key={index}>{item.organisation}</List.Description>
        </List.Item>
      ))}
    </List>
  ) : (
    ''
  );

export default DataProvenanceWidgetView;
