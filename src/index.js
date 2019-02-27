/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  
    let length = preferences.length; 
    let count = 0;  
      for (let i = 0; i<length; i++) { 
        let n = i+1; 
        let lover31 = preferences[i]; 
        let lover12 = preferences[lover31-1]; 
        let lover23 = preferences[lover12-1]; 

        if (n==lover23)  {count++;}
      }
   return Math.floor(count/3);
};
