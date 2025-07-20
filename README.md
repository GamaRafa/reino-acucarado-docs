# 🍰 Reino Açucarado — App Design & Documentation

Este repositório contém toda a documentação de suporte ao desenvolvimento do aplicativo mobile **Reino Açucarado**, um sistema de gestão de pedidos de bolos artesanais.

> 📱 **Este repositório NÃO contém o código do app.**  
> Ele é dedicado à documentação técnica, regras de negócio e provas de conceito (PoC).

---

## 📚 Conteúdo

- 📐 Diagramas UML (PlantUML) - renderizados na pasta `out`
  - Casos de uso
  - Atividades (fluxos de criação de bolos)
  - Diagrama de classes (modelagem OO dos bolos)
- 📖 Regras de negócio
  - Modificadores de preço por tipo de massa, recheio e adicionais
  - Diferenças entre os tipos de bolo (Bentô, Mini, 15 e 25 fatias)
- 🧪 Prova de Conceito (PoC)
  - Simulação de pedidos no terminal usando Java
  - Menu interativo para criação de bolos e cálculo de preço

---

## 🍰 Sobre o aplicativo

O aplicativo **Reino Açucarado** será um app **React Native (Expo)** com armazenamento local usando **SQLite**, voltado para o uso interno da confeitaria. Ele permitirá:

- Visualizar a semana atual com pedidos agendados por dia útil
- Adicionar novos pedidos informando as características do bolo
- Calcular automaticamente o preço final com base nas opções escolhidas
- Gerenciar anotações e data de retirada

---

## 🔍 Modelagem dos Bolos

A estrutura de bolos foi pensada com base em herança e polimorfismo:

- `Cake` (classe abstrata)
  - `BentoCake`
  - `MiniCake`
  - `Cake15Slices`
  - `Cake25Slices`

Todos compartilham atributos como massa, recheios, adicionais, embalagem e preço base. Diferenças importantes incluem:

| Tipo de Bolo     | Fatias | Recheios | Embalagem       | Preço Base |
|------------------|--------|----------|------------------|------------|
| Bentô            | 4      | 1        | Isopor           | R$58,00    |
| Mini             | 6      | até 2    | Caixa + cakeboard| R$90,00    |
| 15 fatias        | 15     | até 2    | Caixa + cakeboard| R$160,00   |
| 25 fatias        | 25     | até 2    | Caixa + cakeboard| R$230,00   |

Adicionais especiais como **Red Velvet** e **Pistache** impactam o preço final com base no tipo do bolo.

---

## 🛠️ Tecnologias e Ferramentas

- 🌱 **PlantUML** – para criação dos diagramas UML
- 💬 **Java (CLI)** – para PoC via terminal
- 📂 Este repositório – serve como referência para o time de desenvolvimento e stakeholders


---

## 🧁 Status

🔹 A documentação está em andamento e servirá como base para o desenvolvimento do app.  
🔹 A PoC em Java já permite testar a lógica de preços.  
🔹 O design de interface será prototipado em breve no Figma.

---

## 📌 Próximos passos

- Finalizar diagramas para todos os tipos de bolo
- Consolidar regras de negócio em um único documento (`rules.md`)
- Criar protótipo de UI no Figma baseado nos fluxos já definidos

---
