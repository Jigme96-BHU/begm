const client = require("../server_conn/mqtt");
const flow = require("../schema/flow");
const level = require("../schema/level");  

client.subscribe("GCIT/FLOWDATA");

const mqttdata = async () => {

    await client.on('message',(topic,message)=>{
        try {

            data = JSON.parse(message);
            for (let i = 0; i < data.doc_num; i++) {
                var node_data = data[`doc_${i+1}`];
                flow.create(
                node_data,
            );
            };
            for (let j = 0; j < data.level_num; j++) {
                var level_data = data[`level_${j+1}`];
                level.create(
                    level_data,
                );
            };
            console.log("successfully saved to database")

        } catch (error) {
            console.log("Error storing in database:" + error)
        };
    });
    
};

module.exports = mqttdata;