/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  
    let length = preferences.length; 
    let count = 0;  
      for (let i = 0; i<length; i++) { 
       
        let lover31 = preferences[i]; 
        let lover12 = preferences[lover31-1]; 
        if (lover12 != i+1) {
          let lover23 = preferences[lover12-1];  
          if (i+1==lover23)  {count++;} }
      }
   return count/3;
};
