function storeData(key ,value) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  function getData(key) {
      try {
        let user = JSON.parse(localStorage.getItem(key));
        return user;
      } catch (error) {
         return undefined   
      }
   
  }
  
  function deleteData(key) {
    localStorage.removeItem(key);
  }
  
  export { storeData, getData, deleteData };