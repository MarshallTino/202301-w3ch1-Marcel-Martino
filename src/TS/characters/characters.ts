import Advisor from "../Advisor/Advisor";
import Fighter from "../Fighter/Fighter";
import { King } from "../King/King";
import { Squire } from "../Squire/Squire";
import { type CharacterDataStructure } from "../types/types";

const joffreyData: CharacterDataStructure = {
  name: "Joffrey",
  family: "Baratheon",
  age: 16,
  imageSource: "./",
};

const jaimeData: CharacterDataStructure = {
  name: "Jaime",
  family: "Lannister",
  age: 45,
  imageSource: "../img/jaime.jpg",
};

const daeneryseData: CharacterDataStructure = {
  name: "Daenerys",
  family: "Targaryen",
  age: 30,
  imageSource: "../img/daenerys.jpg",
};

const tyrionData: CharacterDataStructure = {
  name: "Tyrion",
  family: "Lannister",
  age: 40,
  imageSource: "../img/tyrion.jpg",
};

const bronnData: CharacterDataStructure = {
  name: "Bronn",
  family: "Blackwater",
  age: 54,
  imageSource: "../img/bronn.jpg",
};

const joffrey = new King(joffreyData, 2);
const jaime = new Fighter(jaimeData, "sword", 7);
const daenerys = new Fighter(daeneryseData, "Dragons", 10);
const tyrion = new Advisor(tyrionData, daenerys);
const bronn = new Squire(bronnData, 0, jaime);

const characters = [jaime, joffrey, daenerys, tyrion, bronn];

export default characters;
