import { PokemonValue } from '../models/Pokemon.model';

export class PokedexVoiceService {
  speech = new SpeechSynthesisUtterance()

  setNewPokemonSelected(selectedPokemon: PokemonValue) {
    this.playVoice(this.mountSelectionPokemonText(selectedPokemon))
  }

  private playVoice(text: string) {
    this.speech.text = text
    window.speechSynthesis.speak(this.speech);
  }

  private mountSelectionPokemonText(selectedPokemon: PokemonValue): string {
    const { name, types, species } = selectedPokemon
    const typesParsed = types.map(({ name }) => name)

    return `${name}. ${typesParsed.toString().replace(',', '-')} Pokemon. ${species.flavorTextEntries[0].flavorText}`
  }
}