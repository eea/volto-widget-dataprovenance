import React from 'react';
import cx from 'classnames';
import { List } from 'semantic-ui-react';
import { UniversalLink } from '@plone/volto/components';

const DataProvenanceWidgetView = ({ value, className }) =>
  value?.data ? (
    <List className={cx(className, 'widget')} bulleted={true} as="ul">
      {value.data.map((item, index) => (
        <List.Item className="horizontal" key={index} as="li">
          <div>
            {item.link ? (
              <UniversalLink href={item.link}>{item.title}</UniversalLink>
            ) : (
              item.title
            )}
            {item.organisation ? `, ${item.organisation}` : null}
          </div>
        </List.Item>
      ))}
    </List>
  ) : (
    ''
  );
export default DataProvenanceWidgetView;
