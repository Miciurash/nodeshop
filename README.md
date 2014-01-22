# NodeShop

Nodeshop is a Node.js powered E-Commerce system. Express is used for back-end framework, with Jade handling the view engine and Passport for user authentication. 

Bootstrap is used as front-end framework because it's just plain great.

The project is still very much work in progress, and any help would be much appreciated.

Here are some known areas with issues that need addressing:

  * Checkout incomplete
  * Product image storage and retrieval system needed
  * Search does not work
  * No method of payment yet

#Update 27 November '13

Heres a little update to prove I'm alive and still working on NodeShop.

Updated the admin area to bootstrap 3.0, the shop front is currently in progress as well.

Also made the admin area more functional, please dont mess up the DB too much...
  

#Update 21 August '13

Sorry it's been a while but I've been busy recently looking for a new job. 

I'm creating a google group for anyone who would like to get involved witht he project, this will be a place to discuss features, bugs, suggestions and anything else about the project.

Here's whats new in 0.0.6:

  * Auto Login after registered
  * Added more to the order page
  * Basics of an admin area
  * Started product page in admin area
  * Few other bits that i've forgot

#Update 28 June '13

Tidied up some more code, updated the file structure. Added a guest checkout with form validation. Coming soon will be the order form with some kind of payment system, probably paypal.

Started working on an admin area which is slowly coming along, will probably be in the next release.

#Update 23 May '13

Quite a few areas of the system have been tidied up and improved, most notably the shopping cart, the basics of a checkout, the category system and the login system. 

The checkout is moving towards something that may be usable quite soon so watch this space! 

Also planned is an admin area, which I am considering running as a seperate server. This would make it secure and easy to access from a development envrironment.

Billy Topley

#Todo
##Shop
- Internacionalização (moeda)
- Cadastro endereços
- Zip code no checkout
- Alterar quantidade no checkout
- Produto de destaque máximo
- Paypal    
- Máscara de telefone
- i18n
- Integração com correios
- Validação e-mail remota
- Acompanhamento de compra
- Busca de produtos
- SEO
- Tag
- Captcha
- Comentários pro produto
- Compartilhar produto
- Galeria de fotos
- Quantidade pra comprar limitada ao estoque    
- Somente exibir a quantidade se houver mais de um
- Cobrança de cadastro
- Envio de e-mails
- Listagem de UF/Cidade
- Cadastro via CPF

##Admin
- Máscara de valor
- Internacionalização (moeda)
- Listagem de categorias
- Upload de imagem
- Descrição do produto
- Configuração do destaque
- Marcar como vitrine
- Frete
- Processo de pagamento
- Seletor de região disponível
- Moderação de cadastro
- Markdown na descrição do produto
- Dependency injection
- Models
- Relatório enviados
- NF-E ou resumo de notas
