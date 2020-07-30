import React from 'react';
import MaterialTable from 'material-table';
import PropTypes from 'prop-types';

const Table = ({data, columns, isLoading, title}) => {
  return (
    <MaterialTable
      isLoading={isLoading}
      columns={columns}
      data={data}
      title={title}
    />
  );
};

Table.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};

export default Table;
