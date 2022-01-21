import { createElement } from "react";
import CardPresentational from "./presentational";

export function Card(props: any){
    const {cardTitle} = props

    return createElement(CardPresentational,{
        cardTitle
    })
}
