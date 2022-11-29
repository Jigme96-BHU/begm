const mongodb = require("../server_conn/db");
const level = require("../schema/level");
const flow = require("../schema/flow");
const quality = require("../schema/quality");

exports.flowlog = async (req, res) => {
    try {

        const id = req.params.id;

        if (id === 'weekly') {

            const date = req.body.date;

            const weekData = await flow.aggregate(
                [{
                    $match: {
                        $expr: {
                            $eq: [{ $dayOfWeek: '$createdAt' }, { $dayOfWeek: new Date() }],
                        },
                    }
                }])
            res.status(200).json(weekData);

        } else if (id === 'anyday') {

            const date = req.body.date
            console.log(data);

            const anyDayData = await flow.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [{ $dayOfYear: '$createdAt' }, { $dayOfYear: new Date(`${date}`) }],
                        },
                    }
                }
            ])

            res.status(200).json(anyDayData);

        } else if (id === 'month') {

            const date = req.body.date

            const anyMonthData = await flow.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [{ $month: '$createdAt' }, { $month: new Date(`${date}`) }],
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


exports.levellog = async (req, res) => {
    try {
        const id = req.params.id;

        if (id === 'weekly') {

            const date = req.body.date

            const weeklydata = await level.aggregate(
                [{
                    $match: {
                        $expr: {
                            $eq: [{ $dayOfWeek: '$createdAt' }, { $dayOfWeek: new Date() }],
                        },
                    }
                }])
            res.status(200).json(weeklydata);

        } else if (id === 'anyday') {

            const date = req.body.date

            const anyDayData = await level.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [{ $dayOfYear: '$createdAt' }, { $dayOfYear: new Date(`${date}`) }],
                        },
                    }
                }
            ])

            res.status(200).json(anyDayData);

        } else if (id === 'month') {

            const month = req.body.date

            const anyMonthData = await level.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [{ $month: '$createdAt' }, { $month: new Date(`${month}`) }],
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

exports.qualitylog = async(req,res) =>{
    try {
        const id = req.params.id;

        if (id === 'weekly') {

            const date = req.body.date

            const weeklydata = await quality.aggregate(
                [{
                    $match: {
                        $expr: {
                            $eq: [{ $dayOfWeek: '$createdAt' }, { $dayOfWeek: new Date() }],
                        },
                    }
                }])
            res.status(200).json(weeklydata);

        } else if (id === 'anyday') {

            const date = req.body.date

            const anyDayData = await quality.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [{ $dayOfYear: '$createdAt' }, { $dayOfYear: new Date(`${date}`) }],
                        },
                    }
                }
            ])

            res.status(200).json(anyDayData);

        } else if (id === 'month') {

            const month = req.body.date

            const anyMonthData = await quality.aggregate([
                {
                    $match: {
                        $expr: {
                            $eq: [{ $month: '$createdAt' }, { $month: new Date(`${month}`) }],
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



