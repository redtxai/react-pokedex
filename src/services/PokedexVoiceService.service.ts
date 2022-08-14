import { PokemonValue } from '../models/Pokemon.model';

export class PokedexVoiceService {

  setNewPokemonSelected(selectedPokemon: PokemonValue) {
      this.playVoice(this.mountSelectionPokemonText(selectedPokemon))
  }

  private playVoice(text: string) {
    window.speechSynthesis.speak(new SpeechSynthesisUtterance(text));
  }

  private mountSelectionPokemonText(selectedPokemon: PokemonValue): string {
    const { name, types, species } = selectedPokemon
    const typesParsed = types.map(({ name }) => name)

    return `${name}, ${typesParsed.toString().replace(',', '-')} Pokemon. ${species.flavorTextEntries[0].flavorText}`
  }
}