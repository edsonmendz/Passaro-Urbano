import { Pipe, PipeTransform } from '@angular/core'

@Pipe ({
    name: 'descricaoReduzida'
})
export class DescricaoReduzida implements PipeTransform {
    transform(texto: String, truncarEm: number): String {
        if ( texto.length > 15 ) {
            return texto.substr(0, truncarEm) + '... '
        } else {
            return texto
        }
    }
}