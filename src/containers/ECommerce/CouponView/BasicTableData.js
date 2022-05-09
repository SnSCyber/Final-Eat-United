const BasicTableData = () => {
  const header = [
    { title: 'ID' },
    { title: 'Name' },
    { title: ' Description' },
    { title: ' Creation Date' },
    { title: 'Status' },
    { title: 'Amount' },
    { title: 'Edit' },
    { title: 'Delete' },
  ];

  const headerResponsive = [
    { title: 'ID' },
    { title: 'Name' },
    { title: ' Description' },
    { title: ' Creation Date' },
    { title: 'Status' },
    { title: 'Amount' },
    { title: 'Edit' },
    { title: 'Delete' },
  ];

 

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
  return basicTableData;
};

export default BasicTableData;
