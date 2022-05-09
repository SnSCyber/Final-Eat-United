const BasicTableData = () => {
    const header = [
      { title: 'ID' },
      { title: 'Name' },
      { title: 'Price' },
      { title: 'Description' },
      { title: 'Category' },
      { title: 'Restaurant ID' },
      { title: 'Code' },
      { title: 'Quantity' },
      { title: 'Image' },
    ];
  
    const headerResponsive = [
        { title: 'ID' },
        { title: 'Name' },
        { title: 'Price' },
        { title: 'Description' },
        { title: 'Category' },
        { title: 'Restaurant ID' },
        { title: 'Code' },
        { title: 'Quantity' },
    ];
  
   
  
    const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
    return basicTableData;
  };
  
  export default BasicTableData;
  