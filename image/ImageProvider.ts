//Trees
import { Oak } from "../Plant/PlantObjects/Trees/Oak.js"
import { Spruce } from "../Plant/PlantObjects/Trees/Spruce.js"
import { Birch } from "../Plant/PlantObjects/Trees/Birch.js"
//Grass
import { Roses } from "../Plant/PlantObjects/Grass/Roses.js"
import { MeadowGrass } from "../Plant/PlantObjects/Grass/MeadowGrass.js"
import { Dandelions } from "../Plant/PlantObjects/Grass/Dandelions.js"
//Bushes
import { Currant } from "../Plant/PlantObjects/Bushes/Currant.js"
import { Hawthorn } from "../Plant/PlantObjects/Bushes/Hawthorn.js"
import { Raspberries } from "../Plant/PlantObjects/Bushes/Raspberries.js"

import {map} from "/VisualCodeProject/OOP-OOP-2023-OOP2023Team26/SimulationOfLife.js"

    export class ImageProvider{

        drawObject <T>(object: T){
            map.table.rows[1].cells[1].style.backgroundColor = this.getPicture(object)
        }

        private getPicture <T>(object: T): string{
            switch (true) {
                //Plants
                case object instanceof Oak:
                    return "#A53116";
                case object instanceof Spruce:
                    return "#A53116";
                case object instanceof Birch:
                    return "#94685A";
                case object instanceof Roses:
                    return "#5CA681";
                case object instanceof MeadowGrass:
                    return "#5ADF81";
                case object instanceof Dandelions:
                    return "#41A3A2";
                case object instanceof Currant:
                    return "#41F15A";
                case object instanceof Hawthorn:
                    return "#2DA85F";
                case object instanceof Raspberries:
                    return "#83A85F";
                default:
                  return "#FFFFFF";
              }
        }
    }