# Samara Eva Criativa

Crie uma página de vendas completa, profissional, responsiva e focada em conversão para a marca Samara Criar Art's, que vende moldes digitais de EVA em PDF.



OBJETIVO

Vender dois planos de moldes de EVA por meio de uma página rápida, persuasiva e otimizada para visitantes vindos de anúncios do Meta Ads. O pagamento acontecerá no checkout externo da Wiapy. Não crie um checkout próprio.



IDENTIDADE VISUAL

Use rosa, lilás, amarelo pastel e branco. Aparência criativa, organizada, profissional e acolhedora. Tipografia legível, botões grandes, bom contraste, cartões com cantos arredondados e sombras suaves. Priorize dispositivos móveis e carregamento rápido.



1. CABEÇALHO

Exibir o nome Samara Criar Art's e um pequeno menu com Como funciona, Planos e Dúvidas. No celular, usar cabeçalho compacto.



2. PRIMEIRA DOBRA

Título: "Moldes de EVA para transformar suas ideias em lindas criações!"

Subtítulo: "Conheça nossos kits digitais e escolha a coleção ideal para seus projetos de artesanato."

Mostrar uma composição visual de folhas de moldes imprimíveis e peças de EVA. Usar imagens reais do acervo quando forem fornecidas. Não afirmar que um exemplo visual está incluído se não estiver.

Adicionar botão "ESCOLHER MEU KIT", que leve à seção de planos.



3. GALERIA DE IMAGENS EM LOOPING INFINITO

Criar uma seção funcional com título "VEJA A VARIEDADE DE MOLDES PARA SUAS CRIAÇÕES" e subtítulo "Inspire-se e escolha o kit ideal para você".

Exibir uma faixa horizontal de imagens que se mova automaticamente da direita para a esquerda, continuamente, em loop infinito, sem saltos, pausas, espaços vazios ou reinícios perceptíveis.

Duplicar a sequência de imagens no código para permitir a continuidade visual.

Usar CSS para a animação, com velocidade suave e consistente.

No celular, manter a galeria adaptável e sem barras de rolagem visíveis. No computador, exibir várias imagens ao mesmo tempo.

Respeitar prefers-reduced-motion: reduzir ou desativar a animação para quem prefere movimento reduzido.

Usar imagens reais dos moldes que eu fornecer. Se ainda não houver imagens, criar espaços reservados claramente identificados para substituição, sem fingir que são fotos dos arquivos reais.

Adicionar carregamento otimizado, dimensões reservadas para evitar saltos de layout e textos alternativos acessíveis.

A galeria não pode bloquear os botões de compra.



4. BENEFÍCIOS

Criar três blocos com ícones:

- Arquivos digitais para imprimir, conforme o formato real do produto.

- Opção prática para organizar seus projetos de artesanato.

- Duas opções de kit para escolher conforme sua necessidade.

Não prometer resultados, lucros, quantidades ou benefícios não comprovados.



5. SEÇÃO COMO FUNCIONA

Mostrar três etapas:

1. Escolha seu kit.

2. Finalize o pagamento no checkout Wiapy.

3. Acesse os arquivos conforme as instruções de entrega configuradas para o produto.

Não afirmar que o acesso é instantâneo até que essa condição esteja confirmada.



6. SEÇÃO DOS PLANOS

Criar dois cartões de preço responsivos e fáceis de comparar.



PLANO ESSENCIAL — R$ 9,90

Descrição: "Uma seleção de moldes de EVA para quem quer começar."

Incluir somente uma seleção menor de arquivos reais do meu acervo. Não inventar quantidade nem temas. Mostrar uma lista de conteúdo editável no projeto.

Botão: "QUERO O KIT ESSENCIAL"

O botão deve abrir exclusivamente o link de checkout Wiapy do plano de R$ 9,90.



PLANO COMPLETO — R$ 14,99

Descrição: "Mais variedade de moldes para ampliar suas possibilidades de criação."

Incluir todo o conteúdo do Essencial mais moldes adicionais reais do meu acervo, organizados por tema quando possível. Não inventar quantidades, bônus ou conteúdos.

Destacar visualmente como opção recomendada, sem alegações enganosas.

Botão: "QUERO O KIT COMPLETO"

O botão deve abrir exclusivamente o link de checkout Wiapy do plano de R$ 14,99.



Criar duas configurações claramente identificadas para os links:

W I A P Y_CHECKOUT_ESSENCIAL

W I A P Y_CHECKOUT_COMPLETO

Usar constantes ou variáveis de configuração fáceis de editar. Enquanto os links reais não forem fornecidos, mostrar aviso no ambiente de desenvolvimento e desativar os botões de compra para evitar redirecionamentos incorretos. Nunca inventar links. Validar que cada botão utiliza o link correto.



7. COMPARAÇÃO

Criar uma tabela ou lista comparativa simples dos dois planos. Mostrar diferenças apenas depois que o conteúdo real for definido. Não marcar itens como incluídos sem confirmação. No celular, usar cartões empilhados ou comparação fácil de ler.



8. CONFIANÇA E TRANSPARÊNCIA

Explicar claramente que se trata de um produto digital, o formato dos arquivos, os requisitos para abrir e imprimir, a forma de entrega e o canal de suporte. Incluir política de privacidade, termos de compra e política de reembolso conforme as condições reais do negócio. Não inventar avaliações, depoimentos, selos de certificação ou garantias.



9. PERGUNTAS FREQUENTES

Criar perguntas expansíveis:

- O produto é físico ou digital?

- Como receberei os arquivos?

- Como posso abrir e imprimir os PDFs?

- Qual a diferença entre os planos?

- Como entro em contato para obter suporte?

Preencher respostas com informações configuráveis e verdadeiras. Se algo ainda não foi definido, deixar sinalizado para edição antes de publicar.



10. CHAMADA FINAL

Título: "Escolha seu kit de moldes de EVA"

Mostrar os preços de R$ 9,90 e R$ 14,99 e botões que direcionem aos respectivos checkouts.



11. RODAPÉ

Exibir Samara Criar Art's, e-mail ou canal de suporte configurável, links de política de privacidade, termos de compra e política de reembolso. Não inventar dados de contato.



12. INTEGRAÇÃO WIAPY

Não processar pagamentos dentro do Lovable. Utilizar os links reais de checkout fornecidos por mim.

Cada plano deve ter seu próprio link. Abrir em nova aba com segurança ou redirecionar conforme configuração.

Registrar cliques nos botões sem coletar informações pessoais desnecessárias.



13. META PIXEL E CONVERSÕES

Preparar a integração com o Pixel da Meta usando o ID real que eu fornecer, sem inventar identificadores.

Permitir rastrear PageView, ViewContent, InitiateCheckout e Purchase somente nos pontos adequados.

O clique no botão de compra pode registrar InitiateCheckout, mas Purchase só deve ser registrado quando a compra estiver realmente confirmada.

Evitar disparar Purchase na simples visualização da página de vendas. Para confirmação de compra, usar a integração oficial disponível na plataforma de checkout ou uma implementação validada.

Evitar duplicidade entre Pixel e API de Conversões. Respeitar consentimento e privacidade aplicáveis.



14. SEO E DESEMPENHO

Adicionar título e descrição de SEO relevantes para moldes de EVA em PDF. Otimizar imagens, dimensões, acessibilidade, carregamento e layout mobile. Usar componentes reutilizáveis e código organizado.



15. REQUISITOS DE IMPLEMENTAÇÃO

Construir a página funcional, não apenas uma imagem de demonstração.

Testar em telas pequenas e grandes, validar links, verificar que o looping não apresenta saltos, testar navegação por teclado e respeitar movimento reduzido.

Não substituir nem alterar links de checkout existentes sem minha autorização.

Não inventar dados do produto.

Ao concluir, apresentar uma lista dos campos que ainda preciso preencher: links dos dois checkouts Wiapy, imagens reais, conteúdo de cada kit, contato de suporte, políticas e ID do Pixel, se aplicável.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://samara-eva-criativa.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/3e169764-c316-423d-9a1c-c76d9fd24b5f).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
