/**
 * iterates over request query object if present, 
 * determines if objectkeys are within the model of the parent
 * table, or the child table. returns object with keys to filter
 * by.
 * 
 * @param {object} req The request query object.
 * @param {object} modelObject The model attributes object.
 * @return {object} object to use with sequelize where clause
 */

module.exports = whereConstruct = (req, modelObject) =>{
  let obj = {}
  for(const [key,value] of Object.entries(req)){
    // key type check could be implemented here
    if(req){ 
      switch(modelObject.hasOwnProperty(key)){
        // check if key is present in current model.
        // returns the ones present, skips the ones missing
        case true:
         obj[key] = value
         break 
        case false:
          
          break
      }
    } else {
      obj = {}
    }
  }
  return obj
}