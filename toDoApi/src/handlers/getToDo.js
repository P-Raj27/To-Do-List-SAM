const aws = require("aws-sdk")
const dynamodb = new aws.DynamoDB();
exports.handler = async (event) => {
    try {
        var params = {
            TableName : "toDo-pr",
        }
        var result = await dynamodb.scan(params).promise()
        console.log(JSON.stringify(result))
        console.log(result.Items)
        result.Items.forEach(element => {
            console.log("To do  - "+element.toDo.S)
            console.log("Deadline to work is - "+element.deadline.S)
        })
        return result.Items
        
    }
    catch (error) {
        console.error(error);
        return error
    }
    
};