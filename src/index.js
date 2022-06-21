import {
  DataProvenance,
  DataProvenanceWidgetView,
} from '@eeacms/volto-widget-dataprovenance/components';

const applyConfig = (config) => {
  config.widgets.widget.data_provenance = DataProvenance;

  if (config.widgets.views?.widget) {
    config.widgets.views.widget.data_provenance = DataProvenanceWidgetView;
  }

  return config;
};

export default applyConfig;
