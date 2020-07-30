export default {
  concillors: [
    {
      title: 'Id',
      field: 'id',
      sorting: true,
      filtering: true,
    },
    {
      title: 'Updated',
      field: 'updated',
      formatter: 'date',
      sorting: false,
      filtering: false,
    },
    {
      title: 'Code',
      field: 'code',
      sorting: false,
      filtering: false,
    },
    {
      title: 'From',
      field: 'from',
      formatter: 'date',
      sorting: false,
      filtering: false,
    },
    {
      title: 'Name',
      field: 'name',
      sorting: true,
      filtering: true,
    },
    {
      title: 'To',
      field: 'to',
      formatter: 'date',
      sorting: false,
      filtering: false,
    },
  ],
};
