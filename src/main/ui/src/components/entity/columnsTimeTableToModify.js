export function timeTableColumnsGenerator(handleDelete,handleEdit) {
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
      {
        name: ' ',
        ignoreRowClick: true,
        cell: row => <button className="edit-button" onClick={e => handleEdit(row, e)}>Edit</button>
      },
      {
        name: ' ',
        ignoreRowClick: true,
        cell: row => <button className="delete-button" onClick={e => handleDelete(row, e)}>X</button>
      },
    
  
    ];
  
    return columns;
  };
  