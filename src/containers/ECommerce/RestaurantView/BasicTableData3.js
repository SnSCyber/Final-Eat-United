const BasicTableData = () => {
    const header = [
      { title: 'ID' },
      { title: 'Name' },
      { title: 'Address' },
    ];
  
    const headerResponsive = [
        { title: 'ID' },
        { title: 'Name' },
        { title: 'Address' },
    ];
  
   
    const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
    return basicTableData;
  };
  
  export default BasicTableData;
  