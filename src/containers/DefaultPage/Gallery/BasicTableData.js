const BasicTableData = () => {
    const header = [
        { title: 'Image' },
    ];
  
    const headerResponsive = [
      { title: 'ID' },
      { title: 'Image' },
      { title: 'Path' },
      { title: 'Upload Date' },
      
    ];
  
   
  
    const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
    return basicTableData;
  };
  
  export default BasicTableData;
  