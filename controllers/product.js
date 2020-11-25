
const UserViews = require('../models/userView');
module.exports.getProductViews = async (req,res)=>{

    try {
        const { startAt, endAt,productID } = req.query;
        let matchQuery = {};
        if(startAt && endAt){
            matchQuery['$match'] = {productID : productID ,viewDate:{$gt :startAt , $lte  : endAt}}
        }else if(startAt && !endAt){
            matchQuery['$match'] = {productID:productID,viewDate:{$gt :startAt}}
        }else{
            matchQuery['$match'] = {productID:productID }
        }
        console.log('the date is ',matchQuery)
          let productVisitCountByUser=  await    UserViews.aggregate([
                matchQuery,
            {"$group": {
                "_id": {
                    "$subtract": [
                        "$viewDate",
                        { "$mod": [
                            { "$subtract": [ "$viewDate", new Date("1970-01-01T00:00:00.000Z") ] },
                            1000 * 60 * 60 * 24
                        ]}
                    ]
                },
                "UserIDs": { "$addToSet": "$UserID"},
                "totalviews": { "$sum": 1 }
            }},
            { 
                "$project": {
                    "totalviews": 1,
                    "totalUniqueCount": { "$size": "$UserIDs" }
                }
            }
        ])
        res.status(200).send({ result: productVisitCountByUser });
      } catch (err) {
          console.log(err)
        res.status(400).send(err);
      }
    
}

module.exports.saveProductView = async (req,res)=>{
    const view = new UserViews(req.body);
    try {
      await view.save();
      res.status(200).send({ view });
    } catch (err) {
      res.status(400).send(err);
    }
}