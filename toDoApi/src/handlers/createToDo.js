const aws = require("aws-sdk")
/*const config = {
    apiVersion: ,
    region: ,
}*/
const dynamodb = new aws.DynamoDB();
exports.handler = async (event,context) => {
    // TODO implement
    let body;
    const {toDo} = event
    const {deadline} = event
    console.log("toDo is -"+toDo)
    console.log("deadline - "+deadline)
    
    
    try {
        const params = {
            TableName : "toDo-pr",
            Item : {
                "toDo" : {S:toDo},
                "deadline" : {S:deadline},
                
            }
        }
        await dynamodb.putItem(params).promise();
        console.log("Successfully Added to the table")
        return ("Successfully Added ")
        
    }
    catch(err){
        console.log(err)
        return err
    }
};
