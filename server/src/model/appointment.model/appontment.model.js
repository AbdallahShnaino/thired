
const appointemts = [
    {
         name:"name",
         date:"0/0/0000",
         desc:"desc"
    },
    {
        name:"name",
        date:"0/0/0000",
        desc:"desc"
   },
   {
    name:"name",
    date:"0/0/0000",
    desc:"desc"
    },
    {
        name:"name",
        date:"0/0/0000",
        desc:"desc"
   },
 ]

 
 function getData () {
      return new Promise( ( resolve , rejict ) => {
       resolve(appointemts)
  })
 }

 module.exports = {getData,}