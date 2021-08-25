import db from '../config/db'

export default async (request,response) => {
  let variable = await db.query(
    'SELECT * FROM "dataHeader" limit 5' 
  )
  .then(res=>{
    console.log(res)
  })
}