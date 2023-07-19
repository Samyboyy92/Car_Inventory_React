//External imports
import React from 'react';
import { useDispatch, useStore } from 'react-redux';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Button } from '@mui/material';

//Internal imports
import {
    chooseName,
    chooseMake,
    chooseModel,
    chooseColor,
    chooseYear,
    choosePrice,
    chooseSpeed,
    chooseDescription } from '../../redux/slices/rootSlice';
import { CarState } from '../../redux/slices/rootSlice';
import { Input } from '../sharedComponents/Input';
import { serverCalls } from '../../api';


interface CarFormProps {
    id?: string;
    data?: CarState
}

export const CarForm = (props: CarFormProps) => {
    const dispatch = useDispatch();
    const store = useStore()
    const { register, handleSubmit } = useForm<CarState>({})

    const onSubmit: SubmitHandler<CarState> = async(data, event) =>{
        if (event) event.preventDefault();

        if (props.id){
            console.log(props.id)
            await serverCalls.update(props.id, data);
            console.log(`Updated car: ${data.name}`);
            window.location.reload()
            if (event) event.currentTarget.reset()
        } else{
            dispatch(chooseName(data.name))
            dispatch(chooseMake(data.make))
            dispatch(chooseModel(data.model))
            dispatch(chooseColor(data.color))
            dispatch(chooseYear(data.year))
            dispatch(choosePrice(data.price))
            dispatch(chooseSpeed(data.max_speed))
            dispatch(chooseDescription(data.description))

            console.log(store.getState())

            await serverCalls.create(store.getState() as CarState)
            window.location.reload()
            if (event) event.currentTarget.reset()
        }
    }
    return (
        <div>
            <form onSubmit = {handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Car Name</label>
                    <Input {...register('name')} name='name' placeholder='Name Here' />
                </div>
                <div>
                    <label htmlFor="make">Car Make</label>
                    <Input {...register('make')} name='make' placeholder='Make Here' />
                </div>
                <div>
                    <label htmlFor="model">Car Model</label>
                    <Input {...register('model')} name='model' placeholder='Model Here' />
                </div>
                <div>
                    <label htmlFor="color">Car Color</label>
                    <Input {...register('color')} name='color' placeholder='Color Here' />
                </div>
                <div>
                    <label htmlFor="year">Car Year</label>
                    <Input {...register('year')} name='year' placeholder='Year Here' />
                </div>
                <div>
                    <label htmlFor="price">Car Price</label>
                    <Input {...register('price')} name='price' placeholder='Price Here' />
                </div>
                <div>
                    <label htmlFor="max_speed">Car's Max Speed</label>
                    <Input {...register('max_speed')} name='name' placeholder='Max Speed Here' />
                </div>
                <div>
                    <label htmlFor="description">Car Description</label>
                    <Input {...register('description')} name='description' placeholder='Description Here' />
                </div>
                <Button type='submit'>Submit</Button>
            </form>
        </div>
    )
}