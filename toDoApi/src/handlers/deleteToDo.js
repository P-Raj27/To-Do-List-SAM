
const aws = require("aws-sdk")
const dynamodb = new aws.DynamoDB();
exports.handler = async (event) => {
    // TODO implement
    const {toDo} = event
    try {
        //{toDo} = event
        var params = {
            TableName : "toDo-pr",
            Key: {
                "toDo": {S:toDo},
                    }
            
        }
        console.log(params)
        await dynamodb.deleteItem(params).promise();
        console.log("SuccessFully Deleted")
        return ("SuccessFully Deleted")
        }
    catch(error) {
        console.error(error);
        return error
    }
};
