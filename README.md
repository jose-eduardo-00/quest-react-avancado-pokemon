# Quest-API-Pokemon
Desafio DevQuest - Página de listagem de Pokemon, usando a PokeAPI

# Propósito da Aplicação
  Está aplicação mostra uma lista que inicialmente tem 10 cards de pokemons clicáveis mas que pode aumentar caso 
	o usuário solicite, e ao clicar em um card o usuário é direcionado para uma seção para obter mais informações 
	do pokemon do card clicado

# Linguagens e Tecnologias Utilizadas
- HTML
- CSS
- JavaScript
- React
- Styled Components
- API
- Context API

# Ferramentas Utilizadas
  - React.js - Para uma melhor organização ep adronização do código do projeto <br>
  - Styled Components - Para uma melhor organização e entendimento do código de estilos <br>
  - Context API - Para Criar o contexto de temas no projeto <br>

# Funcionalidades da Aplicação
  - Ao abrir o site uma lista com 10 cards de pokemons são pré-carregados
  - Ao clicar em um dos cards é levado para uma seção com mais informações do pokemon do card clicado, e essa seção 
    também possui um botão de Voltar a Home
  - Um campo input para digitar o tipo de pokemon e filtrar a sua lista para aparecer somente pokemons que são 
    daquele tipo, clicando no botão com ícone de lupa ou apertando enter no teclado para realizar a pesquisa
  - Um botão ao lado direito do campo input para recarregar a sua lista completa novamente
  - Um botão para alternar entre os temas light e dark
  - Um botão Carregar mais para adicionar mais 10 cards de pokemon a sua lista

# Decisões adotadas durante o planejamento e execução do projeto
 - Criei uma lista em formato de objeto que contém inicialmente 10 objetos um para cada pokemon contendo apenas as 
    informações necessárias assim que o site é carregado para minizar a quantidade de requisições a API, mas essa lista 
    pode ser incrementada ou modificada com base nas ações do usuário no site, e é essa lista que é mostrada na home do
    site
 - Coloquei os aquivos styled.js, test.js e functions.js junto com seus respectivos componentes para deixar melhor 
    organizado e deixar mais fácil de entender onde esses códigos estão sendo usados

# Passo a passo dos comandos para rodar o projeto em seu computador local
 - Abra o terminal na pasta que deseja clonar o projeto e use os comando abaixo: <br>
    npm init <br>
    git clone https://github.com/jose-eduardo-00/quest-react-avancado-pokemon.git 
 - No terminal do projeto no github use os comandos abaixo para rodar o projeto localmente: <br>
     npm install <br>
     npm start <br>
     para rodar o test use o comando npm run test
  
# Desktop Design

Home Dark Theme
![home-darkTheme-design-desktop-quest-react-avancado-pokemon](https://github.com/jose-eduardo-00/quest-react-avancado-pokemon/assets/106699339/99418b96-170a-466e-b3cf-dc670e15c3fa)

Home Light Theme
![home-lightTheme-design-desktop-quest-react-avancado-pokemon](https://github.com/jose-eduardo-00/quest-react-avancado-pokemon/assets/106699339/c9933a09-29e9-4adf-9490-96f867c87a41)

Pokemon Details Dark Theme
![pokemonDetails-darkTheme-design-desktop-quest-react-pokemon](https://github.com/jose-eduardo-00/quest-react-avancado-pokemon/assets/106699339/74a51dee-40d3-4718-9dc7-8066a6e45d17) 

Pokemon Details Light Theme
![pokemonDetails-lightTheme-design-desktop-quest-react-pokemon](https://github.com/jose-eduardo-00/quest-react-avancado-pokemon/assets/106699339/ec3bc7fb-a419-4fb6-aed4-8ec9581d2010)

# Mobile Design  


Home e Pokemon Details

<img src="https://github.com/jose-eduardo-00/quest-react-avancado-pokemon/assets/106699339/66ed6236-b250-4fa5-9ea5-3cb46dcbe1f2" width="400" />
<img src="https://github.com/jose-eduardo-00/quest-react-avancado-pokemon/assets/106699339/78c97ddb-c342-4234-88a9-1c1eb00326dd" width="400" align="top" />



