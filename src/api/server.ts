let token = 'aa7042eeb7432762aa54f08adb146248645b6c2945c31c35'
import { CarState } from "../redux/slices/rootSlice";

export const serverCalls = {
    get: async () => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch data from server'), response.status
        }
        return await response.json()
    },
    create: async(data: CarState) => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars`, {
            method: 'POST',
            headers: {            
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`,
                'mode': 'no-cors',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)
        });
        if(!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }
        return await response.json()
    },
    update: async(id: string, data: CarState) => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok){
            throw new Error('Failed to create data on server'), response.status
        }
        return await response.json()
    },
    delete: async(id:string) => {
        const response = await fetch(`https://car-collections-rangers-121.glitch.me/api/cars/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token': `Bearer ${token}`
            }
        });
        if (!response.ok){
            throw new Error('Failed to delete data'), response.status
        }
    }
}
