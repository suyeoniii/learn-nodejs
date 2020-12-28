//async/swait
const findAndUser = async (Users) => {
    try{
        let user = await Users.findOne([]);
        user.name = 'zero';
        user = await user.save();
        user = await Users.findOne({ gender : 'm'});       
    } catch(error){
        console.error(error);
    }                                                                                                       
}
//with for
const promise1 = Promise.resolve('성공');
const promise2 = Promise.resolve('성공2');
(async () => {
    for await (promise of [promise1, promise2]) {
        console.log(promise);
    }
})();
//other
async function findAndSaveUser(Users) {
    //
}
findAndSaveUser().then(() => {});

//Or
async function other(){
    const result = await findAndSaveUser();
}