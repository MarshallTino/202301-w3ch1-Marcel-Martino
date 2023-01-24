import {
  type CharacterDataStructure,
  type KingStructure,
} from "../types/types";

import Character from "../Character/Character";

export class King extends Character implements KingStructure {
  constructor(
    characterData: CharacterDataStructure,
    public yearsOfReign: number
  ) {
    super(characterData);
  }

  communicate(): string {
    return `${super.communicate()}Everybody will die`;
  }
}
