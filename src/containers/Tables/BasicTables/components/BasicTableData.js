const BasicTableData = () => {
  const header = [
    { id: 1, title: '#' },
    { id: 2, title: 'First Name' },
    { id: 3, title: 'Last Name' },
    { id: 4, title: 'Username' },
    { id: 5, title: 'Status' },
  ];

  const headerResponsive = [
    { title: 'ID' },
    { title: 'First Name' },
    { title: 'Last Name' },
    { title: 'Username' },
    { title: 'Age' },
    { title: 'Date' },
    { title: 'Location' },
    { title: 'Status' },
  ];

 

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: headerResponsive };
  return basicTableData;
};

export default BasicTableData;
