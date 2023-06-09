import React from 'react';
import cx from 'classnames';
import { List } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';

const DataProvenanceWidgetView = ({ value, className }) =>
  value?.data ? (
    <List className={cx(className, 'widget')} bulleted={true}>
      {value.data.map((item, index) => (
        <List.Item className="horizontal" key={index}>
          <List.Content>
            {item.link ? (
              <UniversalLink href={item.link}>{item.title}</UniversalLink>
            ) : (
              item.title
            )}
            {item.organisation ? `, ${item.organisation}` : null}
          </List.Content>
        </List.Item>
      ))}
    </List>
  ) : (
    ''
  );

export default DataProvenanceWidgetView;
