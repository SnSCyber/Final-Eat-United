const BasicTableData = () => {
  const header = [
    { title: 'ID' },
    { title: 'First Name' },
    { title: 'Last Name' },
    { title: 'Username' },
    { title: 'Created' },
    { title: 'Email' },
    { title: 'Phone' },
    { title: 'Delete' },
  ];

  const headerResponsive = [
    { title: 'ID' },
    { title: 'First Name' },
    { title: 'Last Name' },
    { title: 'Username' },
    { title: 'Created' },
    { title: 'Email' },
    { title: 'Phone' },
    { title: 'Delete' },
  ];

 

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
  return basicTableData;
};

export default BasicTableData;
