import axios from 'axios';

// Getting all the products
export function fetchAllProducts() {
  return new Promise((resolve, reject) => {
    axios.get('https://dummyjson.com/products?limit=100')
      .then(response => {
        resolve({ data: response.data.products });
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Getting all the category
export function fetchProductsCategoryList() {
  return new Promise(async (resolve, reject) =>
  {
    axios.get('https://dummyjson.com/products/category-list')
    .then(response =>{
      resolve({data: response.data});
    }).catch(err=>{
      reject(err)
    })
  }
  );
}

export function fetchProductByCategory(filter) {
  return new Promise(async (resolve, reject) =>
  {
    axios.get(`https://dummyjson.com/products/category/${filter}`)
    .then(response=>{
      resolve({data: response.data.products})
    }).catch(err=>{
      reject(err)
    })
  }
  );
}

export function fetchSingleProduct(id) {
  return new Promise(async (resolve, reject) =>
  {
    axios.get(`https://dummyjson.com/products/${id}`)
    .then(response=>{
      resolve({data: response.data})
    }).catch(err=>{
      reject(err)
    })
  }
  );
}

export function fetchProductsBySort(sort, order) {
  return new Promise(async (resolve, reject) =>
  {
    axios.get(`https://dummyjson.com/products?sortBy=${sort}&order=${order}`)
    .then(response=>{
      resolve({data: response.data.products})
    }).catch(err=>{
      reject(err)
    })
  }
  );
}