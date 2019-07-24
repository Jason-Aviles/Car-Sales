

export const  ADD_CAR = 'ADD_CAR';

export const addMore = (car)=>{
    return{
        type:ADD_CAR,payload:car
    }
}