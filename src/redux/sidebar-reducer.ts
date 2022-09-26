import {ActionsType, SideBarPropsType} from "./store";
import {v1} from "uuid";

let initialState = {
    friendsData: [
        {id: v1(), name: "Neil Tunicliff", avatar: "https://www.mag-russia.ru/f/product/21_merida_e_bikes_mountainbikes_eone_sixty_my2021_gallery_05.jpg"},
        {id: v1(), name: "Craig Lee Scott", avatar: "https://i.pinimg.com/736x/c2/6f/23/c26f23951566f65eb495497ccc208fc2--mountain-bike-dark-moon.jpg"},
        {id: v1(), name: "Ali Clarkson", avatar: "https://i.ytimg.com/vi/q_4gVJpSJtA/maxresdefault.jpg"},
        {id: v1(), name: "Damon Watson", avatar: "https://i.pinimg.com/236x/34/57/50/345750705629b0b7d592036167c5832b.jpg"}
    ]
}

export const sidebarReducer = ( state: SideBarPropsType = initialState, action: ActionsType) => {
    return state;
}