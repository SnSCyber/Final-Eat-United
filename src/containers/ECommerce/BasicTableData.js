const BasicTableData = () => {
  const header = [
    { title: 'ID' },
    { title: 'Name' },
    { title: 'Manager' },
    { title: 'Phone number' },
    { title: 'Email' },
    { title: 'Address' },
    { title: 'Edit' },
    { title: 'Delete' },
  ];

  const headerResponsive = [
    { title: 'ID' },
    { title: 'Name' },
    { title: 'Last Name' },
    { title: 'Username' },
    { title: 'Age' },
    { title: 'Date' },
    { title: 'Location' },
    { title: 'Edit' },
    { title: 'Delete' },
  ];

 

  const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
  return basicTableData;
};

export default BasicTableData;
