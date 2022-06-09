import { DataProvenance } from '@eeacms/volto-widget-dataprovenance/components';

const applyConfig = (config) => {
  config.widgets.widget.data_provenance = DataProvenance;
  return config;
};

export default applyConfig;
