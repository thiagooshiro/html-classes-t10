# Pulso — Exercícios de Layout CSS

**Pulso** é um dashboard interno de analytics usado por times de produto e marketing
para acompanhar métricas de crescimento: usuários ativos, sessões, receita recorrente,
churn e funil de conversão.

A interface tem uma sidebar de navegação fixa à esquerda, uma topbar contextual no
topo, uma faixa com os cinco KPIs principais e um painel central com quatro widgets —
gráfico de barras diário, fontes de tráfego, tabela das páginas mais visitadas e funil
de conversão.

O HTML já está pronto. Sua tarefa é fazer cada seção funcionar visualmente completando
os blocos `/* TODO */` no `style.css`.

---

## EX-01 — Estrutura geral da aplicação

**Contexto:** O Pulso é um app de tela cheia. A sidebar fica fixada à esquerda
enquanto o conteúdo principal rola de forma independente.

**Comportamento esperado:**
A área `.app` divide a viewport horizontalmente: a `.sidebar` ocupa 220px à
esquerda e permanece visível mesmo quando o usuário scrolla o conteúdo. O `.main`
ocupa todo o espaço restante e possui scroll vertical próprio.

**Dica conceitual:** Pense em como separar dois elementos em faixas horizontais
paralelas — e como fixar um deles enquanto o outro se move.

**Critério de sucesso:**
- [ ] A sidebar fica visível ao scrollar a página
- [ ] O conteúdo principal não fica atrás ou embaixo da sidebar
- [ ] Nenhuma barra de scroll horizontal aparece

---

## EX-02 — Topbar

**Contexto:** A barra superior mostra o título da seção atual e dois botões de ação.

**Comportamento esperado:**
O título ("Visão Geral") e o período ("Últimos 30 dias") ficam empilhados à
esquerda. Os botões ficam lado a lado à direita, alinhados verticalmente ao
centro em relação ao título. Os dois grupos nunca se sobrepõem.

**Dica conceitual:** Pense em como distribuir dois grupos em extremos opostos de
um container, mantendo o alinhamento vertical coerente entre eles.

**Critério de sucesso:**
- [ ] Título e período estão empilhados (período abaixo do título)
- [ ] Botões estão lado a lado com espaçamento entre eles
- [ ] Os dois grupos ficam em lados opostos da topbar
- [ ] Nenhum elemento quebra de linha em telas ≥ 768px

---

## EX-03 — KPI Strip

**Contexto:** Cinco cards de métricas principais ficam em fila logo abaixo da topbar.

**Comportamento esperado:**
Os cinco cards dividem a largura disponível em proporções iguais, sem quebra de
linha. Dentro de cada card, label, valor e delta estão empilhados verticalmente —
o valor numérico deve ser o elemento visualmente dominante.

**Dica conceitual:** Considere como fazer elementos filhos compartilharem espaço
de forma proporcional sem definir larguras fixas.

**Critério de sucesso:**
- [ ] Todos os cinco cards aparecem na mesma linha
- [ ] Todos têm a mesma largura
- [ ] Dentro de cada card, label está acima do valor, que está acima do delta
- [ ] A cor verde/vermelha do delta está visível e correta

---

## EX-04 — Dashboard Grid

**Contexto:** O painel central tem quatro widgets de tamanhos diferentes.

**Comportamento esperado:**
O grid tem 3 colunas. O gráfico de barras ("Sessões por Dia") ocupa as duas
primeiras colunas; "Fontes de Tráfego" ocupa a terceira. Na segunda linha, a
tabela de páginas ocupa as duas primeiras colunas e o funil de conversão ocupa
a terceira.

```
┌──────────────┬──────────────┬──────────┐
│              │              │  Fontes  │
│   Gráfico    │   Gráfico    │          │
├──────────────┴──────────────┼──────────┤
│       Tabela de Páginas     │  Funil   │
└─────────────────────────────┴──────────┘
```

Dentro de cada panel, o título e os controles (tabs ou nada) ficam alinhados
horizontalmente em extremos opostos.

Dentro de cada `.source-item`, a barra de progresso deve se expandir para
preencher o espaço disponível entre o label fixo e a porcentagem.

**Dica conceitual:** O posicionamento de itens específicos no grid pode ser
controlado diretamente no elemento filho, não apenas no container.

**Critério de sucesso:**
- [ ] Gráfico ocupa 2/3 da largura na primeira linha
- [ ] Tabela ocupa 2/3 da largura na segunda linha
- [ ] Fontes e Funil ocupam 1/3 cada, nas suas respectivas linhas
- [ ] Dentro de cada fonte, a barra expande para preencher o espaço disponível
- [ ] `.panel__header` posiciona título e controles em lados opostos

---

## EX-05 — Responsividade: Tablet (≤ 900px)

**Contexto:** Em tablets, a sidebar toma espaço demais e prejudica a leitura
dos dados.

**Comportamento esperado:**
A sidebar some completamente. O `.main` passa a ocupar 100% da largura da tela.
O dashboard grid passa a ter 2 colunas; todos os painéis ocupam uma coluna
inteira (sem spans). Os KPIs continuam em linha, podendo quebrar se necessário
— cada card deve ter largura mínima suficiente para o número não truncar.

**Dica conceitual:** Remover um elemento do fluxo normal pode exigir mais do
que `display: none` dependendo de como o layout foi construído.

**Critério de sucesso:**
- [ ] Sidebar não aparece em 900px ou menos
- [ ] `.main` ocupa 100% sem overflow horizontal
- [ ] O grid de painéis tem no máximo 2 colunas
- [ ] Nenhum número de KPI está cortado ou sobreposto

---

## EX-06 — Responsividade: Mobile (≤ 480px)

**Contexto:** Em mobile, espaço horizontal é crítico e a tabela precisa ser
simplificada.

**Comportamento esperado:**
A topbar empilha o bloco de título acima dos botões. Os KPIs se reorganizam em
grid 2x2 (quinto card ocupa a largura toda na linha de baixo, centralizado). O
dashboard grid vira uma única coluna. Na tabela de páginas, as colunas
"Tempo Médio" e "Taxa de Saída" ficam ocultas — apenas "Página" e "Visitas"
permanecem visíveis.

**Dica conceitual:** Elementos `<th>` e `<td>` de colunas específicas podem ser
selecionados por posição. Esconder cabeçalho e células de uma mesma coluna
juntos exige que ambos sejam alvejados na mesma regra.

**Critério de sucesso:**
- [ ] Topbar empilha título acima dos botões em 480px
- [ ] KPIs aparecem em 2 colunas, quinto centralizado
- [ ] Dashboard é coluna única sem overflow
- [ ] Tabela mostra apenas Página e Visitas em 480px
- [ ] Nenhum conteúdo transborda horizontalmente a viewport