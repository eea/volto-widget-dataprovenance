import React from 'react';
import { Accordion, Button, Segment } from 'semantic-ui-react';
import { isArray } from 'lodash';
import {
  Icon as VoltoIcon,
  FormFieldWrapper,
  DragDropList,
} from '@plone/volto/components';
import { ObjectWidget } from '@plone/volto/components';

import deleteSVG from '@plone/volto/icons/delete.svg';
import addSVG from '@plone/volto/icons/add.svg';
import dragSVG from '@plone/volto/icons/drag.svg';
import { v4 as uuid } from 'uuid';
import Schema from './schema';
import './style.css';

export const DataProvenance = (props) => {
  const { id, value = {}, onChange, defaultData = {} } = props;
  const predefinedSchema = Schema(props);
  const flatListValue = isArray(value) ? value : Object.values(value);
  return (
    <>
      <FormFieldWrapper {...props} className="objectlist-inline-widget">
        <div>
          <Button
            compact
            type="button"
            onClick={(e) => {
              onChange(id, [
                ...flatListValue,
                {
                  '@id': uuid(),
                  ...defaultData,
                },
              ]);
              e.stopPropagation();
            }}
          >
            <VoltoIcon name={addSVG} size="12px" />
            {`Add ${predefinedSchema.title}`}
          </Button>
        </div>
      </FormFieldWrapper>
      <DragDropList
        childList={flatListValue.map((o) => [o['@id'], o])}
        onMoveItem={(result) => {
          const { source, destination } = result;
          if (!destination) {
            return;
          }

          const first = flatListValue[source.index];
          const second = flatListValue[destination.index];
          flatListValue[destination.index] = first;
          flatListValue[source.index] = second;

          onChange(id, flatListValue);
          return true;
        }}
      >
        {({ child, childId, index, draginfo }) => {
          return (
            <div
              ref={draginfo.innerRef}
              {...draginfo.draggableProps}
              key={childId}
            >
              <Segment.Group raised>
                <Accordion key={index} fluid styled>
                  <Accordion.Title>
                    <button
                      style={{
                        visibility: 'visible',
                        display: 'inline-block',
                      }}
                      {...draginfo.dragHandleProps}
                      className="drag handle"
                    >
                      <VoltoIcon name={dragSVG} size="18px" />
                    </button>

                    {`${predefinedSchema.title} #${index + 1}`}
                    <button
                      onClick={() => {
                        onChange(
                          id,
                          flatListValue.filter((v, i) => i !== index),
                        );
                      }}
                    >
                      <VoltoIcon name={deleteSVG} size="16px" />
                    </button>
                  </Accordion.Title>
                  <Accordion.Content active>
                    <Segment>
                      <ObjectWidget
                        id={`${id}-${index}`}
                        key={`ow-${id}-${index}`}
                        schema={predefinedSchema}
                        value={child}
                        onChange={(fi, fv) => {
                          const newvalue = flatListValue.map((v, i) =>
                            i !== index ? v : fv,
                          );
                          // const da = newvalue.map((item) => ({
                          //   [item['@id']]: { ...item },
                          // }));

                          onChange(
                            id,
                            newvalue.reduce(
                              (a, v) => ({ ...a, [v['@id']]: v }),
                              {},
                            ),
                          );
                        }}
                      />
                    </Segment>
                  </Accordion.Content>
                </Accordion>
              </Segment.Group>
            </div>
          );
        }}
      </DragDropList>
    </>
  );
};
