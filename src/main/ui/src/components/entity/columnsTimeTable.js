export function timeTableColumnsGenerator(handleDelete) {
  const columns = [
    {
      name: 'Vezetéknév',
      selector: row => row.firstName,
      sortable: true
    },
    {
      name: 'Keresztnév',
      selector: row => row.secondName,
    },
    {
      name: 'Telefon',
      selector: row => row.telNumber,
    },
    {
      name: 'Cím',
      selector: row => row.address,
    },
    // {
    //   name: ' ',
    //   ignoreRowClick: true,
    //   cell: row => <button className="delete-button" onClick={e => handleDelete(row, e)}>{row.delete}</button>
    // },

  ];

  return columns;
};
