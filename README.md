# Teste TV Globo

## Observações acerca da arquitetura escolhida

Utilizei `Vue.js` e optei por fazer [componentes Single-File](https://br.vuejs.org/v2/guide/single-file-components.html), como recomenda a documentação do `Vue.js`, pois posso ver com mais clareza como o HTML e o Javascript se conversam no projeto (além de ter um termômetro natural de "big components" - quando o arquivo acaba ficando grande demais, me faz querer quebrá-lo em componentes menores).

Também utilizei `Vuex` para gerenciamento / compartilhamento de estado entre os componentes. Mesmo o projeto sendo pequeno, permite escalabilidade e facilidade de desenvolvimento.

Utilizo apenas 1 rota dentro do projeto, mas a arquitetura estaria pronta para receber novas rotas com muita facilidade caso fosse necessário em algum ponto do desenvolvimento.

## Testes unitários

O projeto está configurado para trabalhar com `Jest` na criação de testes unitários. Os testes que foram criados encontram-se na pasta `tests/unit`.

## Vamos à prática?

Primeiramente, baixe o respositório e instale as dependências com:
```
yarn install
```

Para rodar localmente o projeto, utilize o comando:
```
yarn start
```

Para gerar um build para publicação:
```
yarn build
```

Para rodar os testes unitários:
```
yarn test:unit
```
