export function timeTableColumnsGenerator(handleDelete) {
  const columns = [
    {
      name: 'Vezeték név',
      selector: row => row.firstName,
      sortable: true
    },
    {
      name: 'Kereszt név',
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
