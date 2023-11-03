import { useState,createContext } from "react";
const AuthContext=createContext(null)
export const AuthProvider=()=>{
    const [user,setUser]=userState(null)
}
const login=(user)