const BasicTableData = () => {
    const header = [
      { title: 'ID' },
      { title: 'Name' },
      { title: 'Description' },   
      { title: 'Manager' },
      { title: 'Phone Number' },
      { title: 'Address' }, 
      { title: 'Map Link' },    
      { title: 'Delivery' },
      { title: 'Pick Up' },
      { title: 'Image' },
    ];
  
    const headerResponsive = [
      { title: 'ID' },
      { title: 'Name' },
      { title: 'Last Name' },
      { title: 'Username' },
      { title: 'Age' },
      { title: 'Date' },
      { title: 'Location' },
    ];
  
   
  
    const basicTableData = { tableHeaderData: header, tableHeaderResponsiveData: header };
    return basicTableData;
  };
  
  export default BasicTableData;
  