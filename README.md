# Node.js - Games API REST

Projeto simples de uma API REST com Node.js.

API criada para consumo de banco de dados MySQL, utlizando apenas uma tabela de exemplo (cad_tb_games) com infomações ficticias de título, preço e ano de publicação de um game.


# Instrução de uso

1. npm install
2. editar arquivo ./database/database.js e alterar informações de acesso do banco de dados
3. descomentar linha 19 do arquivo ./games/Game.js na primeira execução para criar tabela de acordo com o Model.
4. comentar linha apos primeira execução e reiniciar API
