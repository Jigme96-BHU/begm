const client = require("../server_conn/mqtt");
const flow = require("../schema/flow");
const level = require("../schema/level"); 
const quality = require("../schema/quality"); 

client.subscribe("GCIT/DATA");

const mqttdata = async () => {

    await client.on('message',(topic,message)=>{
        try {

            data = JSON.parse(message);
            for (let i = 0; i < data.doc_num; i++) {
                var node_data = data[`d_${i+1}`];
                flow.create(
                node_data,
            );
            };
            for (let j = 0; j < data.l_n; j++) {
                var level_data = data[`l_${j+1}`];
                level.create(
                    level_data,
                );
            };

            for (let k = 0; k < data.w_n; k++){
                var quality_data = data[`Q_${k+1}`];
                quality.create(
                    quality_data,
                );
                
            }
            console.log("successfully saved to database")

        } catch (error) {
            console.log("Error storing in database:" + error)
        };
    });
    
};

module.exports = mqttdata;