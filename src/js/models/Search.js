import axios from 'axios';
import {apiUrl} from '../config';

export default class Search{

    constructor(){}

    async getEvents()
    {
        try{
            const res = await axios(`${apiUrl}`);
            console.log(res.data);
            this.events = res.data;
        }catch(err)
        {
            alert('Something went wrong');
        }
    }
}