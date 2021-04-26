import axios from "axios";
import { getToken } from "utils/session";

export const getRequest = async(url:string, params?:any, header?:any)=>{
  try {
    const {data} = await axios
    .get(url,{
      params,
      headers: {
        Authorization: `${getToken()}`,
        ...header,
      },
    })
    return ({success:true, message: 'success', code:200, data:data.data})
  } catch (error) {
    const statusCode = error.response.status;
    return ({success:false, message: error.response.data.data.message, code:statusCode, data:{}})
  }
}

export const postRequest = async(url:string, params?:any, header?:any)=>{
  try {
    // eslint-disable-next-line
    const {data, status} = await axios
    .post(url,{
      ...params
    },{
      headers: {
        Authorization: `${getToken()}`,
        ...header,
      },
    }) 
    return ({success:true, message: 'success', code:200, data:data.data})
  } catch (error) {
    const statusCode = error.response.status;
    return ({success:false, message: error?.response?.data?.message, code:statusCode, data:{}})
  }
}

export const patchRequest = async(url:string, params?:any, header?:any)=>{
  try {
    const {data} = await axios
    .patch(url,{
      ...params
    },{
      headers: {
        Authorization: `${getToken()}`,
        ...header,
      },
    })    
    return ({success:true, message: 'success', code:200, data:data.data})
  } catch (error) {
    const statusCode = error.response.status;
    return ({success:false, message: error.response.data.data.message, code:statusCode, data:{}})
  }
}


export const deleteRequest = async(url:string, params?:any, header?:any)=>{
  try {
    const {data} = await axios
    .delete(url,{
      data: {...params},
      headers: {
        Authorization: `${getToken()}`,
        ...header,
      },
    })    
    return ({success:true, message: 'success', code:200, data:data.data})
  } catch (error) {
    const statusCode = error.response.status;
    return ({success:false, message: error.response.data.data.message, code:statusCode, data:{}})
  }
}