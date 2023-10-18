import { createContext, useContext, useEffect, useReducer, useState } from "react";
import { getData } from "../api";

export const StateContext=createContext()

const StateContextProvider=({children})=>{
    const [productList,setproductList]=useState([])
    const [search,setSearch]=useState('')
    const [value,setValue]=useState(0)
    const initialState={
        products:[],
        cart:[],
    }

    const reducer=(state,action)=>{
        switch(action.type){
            case 'GET_PRODUCT':
                return {...state,products:action.payload};
            case 'ADD_CART':
                const item=action.payload;
                const isExist=state.cart.find(c=>c.id===item.id)
                if(isExist){
                    return {...state,cart:state.cart.map(c=>c.id===item.id?{...item}:{...c})}
                }
                else{
                    return {...state,cart:[...state.cart,{...item}]}
                }
                console.log(isExist);
                
                
            case 'del':
                setValue(value-action.payload.price)
                return {...state,cart:state.cart.filter(item=>item.id!=action.payload.id)} 
            case 'empty':
                return{...state,cart:(state.cart=[])}         
            default:
                return state;
        }
    }

    const[state,dispatch]=useReducer(reducer,initialState)

    const getP=async()=>{
        const val=await getData('/products')
        setproductList(val)
    }
    useEffect(()=>{getP()},[])
    const data={state,search,setSearch,dispatch,value,setValue}
    useEffect(()=>{
        dispatch({type:'GET_PRODUCT',payload:productList})
        const filterProducts=productList.filter(pd=>pd.title.toLowerCase().includes(search.toLowerCase()))
        dispatch({type:'GET_PRODUCT',payload:filterProducts})
    },[productList,search])
    return(
        <StateContext.Provider value={data}>
            {children}
        </StateContext.Provider>
    )
}
export const UseCon=()=>useContext(StateContext);
export default StateContextProvider;