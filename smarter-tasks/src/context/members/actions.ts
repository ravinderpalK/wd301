/* eslint-disable @typescript-eslint/no-explicit-any */
import { API_ENDPOINT } from "../../config/constants";
import { Inputs } from "../../pages/members/NewMember";

export const fetchMembers = async (dispatch: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    dispatch({ type: "FETCH_MEMBERS_REQUEST" });
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    const data = await response.json();
    dispatch({ type: "FETCH_MEMBERS_SUCCESS", payload: data });
  } catch (error) {
    console.log(error);
    dispatch({ type: "FETCH_MEMBERS_FAILURE", payload: "Unable to load members" });
  }
}

export const addMembers = async (dispatch: any, args: Inputs) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
      body: JSON.stringify(args),
    })
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    console.log(data.user);
    dispatch({ type: 'ADD_MEMBERS_SUCCESS', payload: data.user });
    return { ok: true }
  }
  catch (error) {
    console.log(error);
    return { ok: false, error }
  }
}

export const deleteMember = async (dispatch: any, id: any) => {
  const token = localStorage.getItem("authToken") ?? "";
  try {
    const response = await fetch(`${API_ENDPOINT}/users/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json', "Authorization": `Bearer ${token}` },
    });
    if (!response.ok) {
      throw new Error('Failed to create project');
    }
    const data = await response.json();
    if (data.errors && data.errors.length > 0) {
      return { ok: false, error: data.errors[0].message }
    }
    console.log(data.user);
    dispatch({ type: 'DELETE_MEMBERS_SUCCESS' });
    return { ok: true }
  }
  catch (error) {
    console.log(error);
    return { ok: false, error }
  }
}