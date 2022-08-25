const client = require("../server_conn/mqtt");
var flowrate = [];

module.exports = (app) =>{

    app.io.on('connection',(socket)=>{
        client.subscribe("GCIT/FLOWDATA");""
    
        client.on('message',(topic,message)=>{
            data = JSON.parse(message);
            for (let i = 0; i < data.doc_num; i++) {
                var node_data = data[`doc_${i+1}`];
                flowrate.push(node_data.flow_rate);
            };
            
            small_town = (flowrate[0] - (flowrate[1] + flowrate[2])).toFixed(2)
            rbp = (flowrate[1] - flowrate[2]).toFixed(2)
            bhu = (flowrate[3] - flowrate[4]).toFixed(2)
            school = (flowrate[5] - flowrate[6]).toFixed(2)
            main_town =(flowrate[7] - flowrate[8]).toFixed(2)
            terrace = (flowrate[9] - flowrate[10]).toFixed(2)
            chabjey = (flowrate[11] - (flowrate[12]+ flowrate[13])).toFixed(2)
            kst = (flowrate[13] - (flowrate[11] + flowrate[12])).toFixed(2)
            
            loss = {"small_town":`${small_town}`,
                    "RBP":`${rbp}`,"BHU":`${bhu}`,
                    "School":`${school}`,
                    "Main_Town":`${main_town}`,
                    "Terrace":`${terrace}`,
                    "Chabjey":`${chabjey}`,
                    "KST":`${kst}`};

            // loss = [small_town,rbp,bhu,school,main_town,terrace,chabjey,kst];
            flowrate.splice(0);  
            socket.emit("message",JSON.stringify(loss));
        });
    })
}