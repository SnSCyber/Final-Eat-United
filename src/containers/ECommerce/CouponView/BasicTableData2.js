const BasicTableData = () => {
    const header = [
      { title: 'ID' },
      { title: 'Name' },
      { title: ' Description' },
      { title: ' Creation Date' },
      { title: 'Status' },
      { title: 'Amount' },
    ];
  
    const headerResponsive = [
      { title: 'ID' },
      { title: 'Name' },
      { title: ' Description' },
      { title: ' Creation Date' },
      { title: 'Status' },
      { title: 'Amount' },
    ];
  
   
  
    const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
    return basicTableData;
  };
  
  export default BasicTableData;
  