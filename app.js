const myPromiseFunc = (num) => {
    return new Promise((resolve, reject) => {
        if (num > 5) {
            resolve("number is > 5");
        }
        else {
            reject("number is < 5");
        }
    })
};

                                                    /* Method from .then and .catch */


// myPromiseFunc(1).then((val)=>{
//     console.log(val);
// })
// .catch((err)=>{
//     console.log(err);
// });

                                                    /* use of await */
// async function execute() {                          
//     const val = await myPromiseFunc(12);
//     console.log(val);
// }

                                                     /* use of try and catch  */


async function execute() {                         
    try {
        const val = await myPromiseFunc(8);
        console.log(val);
    }
    catch (error) {                                 /* if any error occurs the catch block detect */
        console.log(error);
    }

}
execute();
