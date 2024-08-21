# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Passos para rodar o projeto:

1 - Rode o comando "npm install"
2 - Rode o comando "npm run dev"

O projeot tem 3 páginas: Home Page, Previsão do tempo de algum dia futuro, e Detalhes do clima atual.

Através da barra de navegação (componente Search) é possível realizar a busca de alguma cidade do mundo.

Após ser feita a busca, um resumo do clima é mostrado ao usuário, contendo o clima atual, as temperaturas ao longo do dia e a previsão para os próximos 7 dias (Por algum motivo, a API está com um bug que retorna apenas 3 dias.)

Ao clicar no ícone de lupa em algum dia da previsão futura, é possível ver o clima ao longo do dia escolhido. (Componente FutureWeatherDetails)

Ao clicar em Informações Extra, é possível verificar os detalhes do clima do dia atual, que inclui umidade, pressão atmosférica, vento e UV.

O projeto foi desenvolvido em inglês por questões de costume.

Qualquer dúvida, entrar em contato com Iago Duarte (iagodduarte@gmail.com).