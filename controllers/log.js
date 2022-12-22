const mongodb = require("../server_conn/db");
const level = require("../schema/level");
const flow = require("../schema/flow");
const quality = require("../schema/quality");

exports.flowlog = async (req, res) => {
    try {

        const {flow_name} = req.body
        const id = req.params.id;

        if (id === 'weekly') {


            console.log(flow_name)
            const date = req.body.date;

            const weekData = await flow.find(

            {
                $and: [
                    { flow_name: flow_name },
                    { $expr: { $eq:[{ $dayOfWeek: '$createdAt' }, { $dayOfWeek: new Date(date) }] } }
                 ]}

               
                
                )
                
            res.status(200).json({weekData});

        } else if (id === 'anyday') {

            const today = req.body.date

            // const anyDayData = await flow.aggregate([
            //     {
            //         $match: {
            //             $expr: {
            //                 $eq: [{ $dayOfYear: '$createdAt' }, { $dayOfYear: new Date(`${date}`) }],
            //             },
            //         }
            //     }
            // ])

            flow.find({$and:[{flow_name},{date: today}]}).exec(function(err,result){
                if(err) throw err;
                res.status(200).json({result});
            })


           


        } else if (id === 'month') {

            const date = req.body.date

            const anyMonthData = await flow.find(
                
                
                {
                    $and: [
                        { flow_name: flow_name },
                        { $expr: { $eq:[{ $month: '$createdAt' }, { $month: new Date(`${date}`) }] } }
                    ]}
            //     [
            //     {
            //         $match: {
            //             $expr: {
            //                 $eq: [{ $month: '$createdAt' }, { $month: new Date(`${date}`) }],
            //             },
            //         }
            //     }
            // ]
            
            
            )

            res.status(200).json({anyMonthData});
        }

    } catch (error) {
        console.log(error);
    }
}









exports.levellog = async (req, res) => {
    
    try {
                const {level_name} = req.body


        const id = req.params.id;

        if (id === 'weekly') {

            const date = req.body.date

             level.find(
              
                {
                    $and: [
                        { level_name: level_name },
                        { $expr: { $eq:[{ $dayOfWeek: '$createdAt' }, { $dayOfWeek: new Date(date) }] } }
                     ]}

                
                
                ).exec((err,weeklydata)=>{
                    res.status(200).json({weeklydata});

                })

        } else if (id === 'anyday') {

            const date = req.body.date

            // level.find(
                
            //     [
            //     {
            //         $match: {
            //             $expr: {
            //                 $eq: [{ $dayOfYear: '$createdAt' }, { $dayOfYear: new Date(`${date}`) }],
            //             },
            //         }
            //     }
            // ]


            level.find({$and:[{level_name},{date}]}).exec(function(err,anyDayData){
                if(err) throw err;
                res.status(200).json({anyDayData});
            })

            
            
           // )

           // res.status(200).json(anyDayData);

        } else if (id === 'month') {

            const month = req.body.date

            level.find(
                
                {
                    $and: [
                        { level_name: level_name },
                        { $expr: { $eq:[{ $month: '$createdAt' }, { $month: new Date(`${month}`) }] } }
                    ]}
            ).exec((err,anyMonthData)=>{
                res.status(200).json({anyMonthData});

            })

        }

    } catch (error) {
        console.log(error);
    }
}














exports.qualitylog = async (req, res) => {
    try {

        const {Quality_name}= req.body
        const id = req.params.id;


        if (id === 'weekly') {

            const date = req.body.date

             quality.find(
                {
                    $and: [
                        { Quality_name: Quality_name },
                        { $expr: { $eq:[{ $dayOfWeek: '$createdAt' }, { $dayOfWeek: new Date(date) }] } }
                     ]}

                
                ).exec((err,weeklydata)=>{
                    res.status(200).json(weeklydata);

                })

        } else if (id === 'anyday') {

            const date = req.body.date

            quality.find({$and:[{Quality_name:Quality_name},{date}]}).exec((err,anyDayData)=>{
                res.status(200).json(anyDayData);

            })


        } else if (id === 'month') {

            const month = req.body.date

            quality.find(  {
                $and: [
                    { Quality_name: Quality_name },
                    { $expr: { $eq:[{ $month: '$createdAt' }, { $month: new Date(`${month}`) }] } }
                ]}).exec((err,anyMonthData)=>{
             
                    res.status(200).json(anyMonthData);

                })


        }


    } catch (error) {
        console.log(error);

    }
}



