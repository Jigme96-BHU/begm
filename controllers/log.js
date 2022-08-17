const mongodb = require("../server_conn/db");
const level = require("../schema/level");
const flow = require("../schema/flow");

exports.flowlog = async(req,res) =>{
    try {
        const id = req.params.id;
        if (id === 'today'){

            const dailydata  = await flow.aggregate(
                [{
                    $match:{
                        $expr:{
                            $eq:[{$dayOfMonth: '$createdAt'},{$dayOfMonth: new Date()}],
                        },
                    }
                }])
            res.status(200).json(dailydata);

        }else if( id === 'anyday'){
           
            const date = '2022-08-15'

            const anyDayData = await node.aggregate([
                {
                    $match:{
                        $expr:{
                            $eq:[{$dayOfYear:'$createdAt'},{$dayOfYear: new Date(`${date}`)}],
                        },
                    }
                }
            ])

            res.status(200).json(anyDayData);

        }else if(id ==='month'){

            const month = '2022-07-19'

            const anyMonthData = await node.aggregate([
                {
                    $match:{
                        $expr:{
                            $eq:[{$month:'$createdAt'},{$month: new Date(`${month}`)}],
                        },
                    }
                }
            ])

            res.status(200).json(anyMonthData);
        }

    } catch (error) {
        console.log(error);   
    }
}


exports.levellog = async(req,res) =>{
    try {
        const id = req.params.id;
        console.log(id)
        if (id === 'today'){

            const dailydata  = await level.aggregate(
                [{
                    $match:{
                        $expr:{
                            $eq:[{$dayOfMonth: '$createdAt'},{$dayOfMonth: new Date()}],
                        },
                    }
                }])
            res.status(200).json(dailydata);

        }else if( id === 'anyday'){
           
            const date = '2022-08-15'

            const anyDayData = await level.aggregate([
                {
                    $match:{
                        $expr:{
                            $eq:[{$dayOfYear:'$createdAt'},{$dayOfYear: new Date(`${date}`)}],
                        },
                    }
                }
            ])

            res.status(200).json(anyDayData);
            
        }else if(id ==='month'){

            const month = '2022-07-19'

            const anyMonthData = await level.aggregate([
                {
                    $match:{
                        $expr:{
                            $eq:[{$month:'$createdAt'},{$month: new Date(`${month}`)}],
                        },
                    }
                }
            ])

            res.status(200).json(anyMonthData);
        }

    } catch (error) {
        console.log(error);   
    }
}



