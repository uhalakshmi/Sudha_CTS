module.exports.midw1 = function (req, res, next) {
    //pre processing are
    // here we can interrup req object
    console.log("preprocessing of middleware1");
    // let { body, params, query } = req;
    // console.log("body: ", body);
    // let emp = body;
    // if (!emp.emp_name) {
    //     return res.status(400).send({
    //       status: "fail",
    //       type: "field error",
    //       message: "emp_name is mandatory field"
    //     })
    //   }
    //   if (!emp.email) {
    //     return res.status(400).send({
    //       status: "fail",
    //       type: "field error",
    //       message: "email is mandatory field"
    //     })
    //   }
    //   if (!emp.job) {
    //     return res.status(400).send({
    //       status: "fail",
    //       type: "field error",
    //       message: "job is mandatory field"
    //     })
    //   }
    next()
    // post processing 
    // here we can interrup res object
    console.log("postprocessing of middleware1");
 }
 module.exports.midw2 = function (req, res, next) {
    //pre processing are
    // here we can interrup req object
    console.log("preprocessing of middleware2");
    next()
    // post processing 
    // here we can interrup res object
    console.log("postprocessing of middleware2");
}
module.exports.midw3 = function (req, res, next) {
    //pre processing are
    // here we can interrup req object
    console.log("preprocessing of middleware3");
    next()
    // post processing 
    // here we can interrup res object
    console.log("postprocessing of middleware3");
}
module.exports.midw4 = function (req, res, next) {
        //pre processing are
        // here we can interrup req object
        console.log("preprocessing of middleware4");
        next()
        // post processing 
        // here we can interrup res object
        console.log("postprocessing of middleware4");
     }