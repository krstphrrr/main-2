const routes = (app) => {
  app.route('/route/:id')
  .get((request,response)=>{
    response.send("hmm")
  })
}

export default routes