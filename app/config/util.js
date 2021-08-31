module.exports = whereConstruct = (req) =>{
  let obj = {}
  for(const [key,value] of Object.entries(req)){
   obj[key] = value
  }
  return obj
}