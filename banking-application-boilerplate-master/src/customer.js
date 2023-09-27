// src/customer.js
var customerList = [];

const addCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      const customer = customerList.find(c => c[0] === CustomerId);

      if (customer) {
            console.log('Customer already exists with this ID');
            return;
      }

      const newCustomer = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category];
      customerList.push(newCustomer);
}

const updateCustomer = (CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category) => {
      console.log('before update', customerList);
      const customerIndex = customerList.findIndex(c => c[0] === CustomerId);

      if (customerIndex === -1) {
            console.log('Customer not found with this ID');
            return;
      }

      customerList[customerIndex] = [CustomerId, CustomerName, CustomerAge, CustomerAddress, CustomerContactNumber, Category];
      console.log("after update", customerList);
}

const getAllCustomers = () => {
      return customerList;
}

module.exports = { addCustomer, updateCustomer, getAllCustomers };

