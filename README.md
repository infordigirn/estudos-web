# new_prestador
site de busca de serviços em geral

# Primeiro instalar o git no computador: https://git-scm.com/downloads

# Vá até a pasta do seu projeto local e abra um terminal

# No terminal digitar os comandos a seguir:

# git --version => para ver se a instalação foi bem sucedida, retorna a versão do git instalada

# git init => inicia o git localmente no seu projeto
# git config user.name <seu usuário git> => vincula sua permissão de usuário no pc
# git config user.email <seu email git> => vincula seu email no pc
# git remote add origin https://github.com/infordigirn/new_prestador.git => conecta com o gitHub (vai pedir user e senha)

# Pronto você já deve estar conctado com o gitHub na branch master do projeto!

# git branch => para verificar em qual branch você está 
# git pull --rebase origin master => baixa o que tiver no git | caso não queira ignore esta linha

# Ordem de trabalho para enviar os arquivos para o git

# git status => exibe arquivo à serem commitados
# git add . => adiciona todos os arquivos na staging para serem commitados
# git commit -m "<comentário com nº da tarefa e o que foi feito>" => envia os arquivo para a branch master
# git pull --rebase origin master => (puxar)atualiza seus arquivos com os que estão no git
# git push origin master => (empurrar)atualiza seus arquivos na branch
# git status => para ver se tem mais algum