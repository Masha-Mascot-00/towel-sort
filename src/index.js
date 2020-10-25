// You should implement your task here.

module.exports = function towelSort(matrix) {
  if (matrix === undefined) {
    return [];
  }else{
    if (matrix.length) {
        let array = [];
        for (let index = 0; index < matrix.length; index++) {
            const elementMatrix = matrix[index];
            if (index % 2) {
                elementMatrix.reverse();
            }
            elementMatrix.forEach((element) => {
                array.push(element);
            });
        }
        return array;
    } else {
        return matrix;
    }
  }
    
};
