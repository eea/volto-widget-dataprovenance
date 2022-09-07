import React from 'react';
import cx from 'classnames';
import { List } from 'semantic-ui-react';

const DataProvenanceWidgetView = ({ value, className }) =>
  value?.data ? (
    <List className={cx(className, 'widget')} bulleted={true}>
      {value.data.map((item, index) => (
        <List.Item className="horizontal">
          <List.Content key={index}>
            {item.link ? <a href={item.link}>{item.title}</a> : item.title}
          </List.Content>
          {item.organisation && (
            <List.Description key={index}>
              {', ' + item.organisation}
            </List.Description>
          )}
        </List.Item>
      ))}
    </List>
  ) : (
    ''
  );

export default DataProvenanceWidgetView;
