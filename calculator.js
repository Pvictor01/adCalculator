/*
A cada 100 pessoas que visualizam o anúncio 12 clicam nele.
A cada 20 pessoas que clicam no anúncio 3 compartilham nas redes sociais.
Cada compartilhamento nas redes sociais gera 40 novas visualizações.
30 pessoas visualizam o anúncio original (não compartilhado) a cada R$ 1,00 investido.
O mesmo anúncio é compartilhado no máximo 4 vezes em sequência 
(1ª pessoa -> compartilha -> 2ª pessoa -> compartilha - > 3ª pessoa -> compartilha -> 4ª pessoa)
- Cada 1 real investido gera 30 novas views

  - A cada X visualizações -> 12% clicam,
  - 15% dos cliques compartilham,
  - Cada compartilhamento gera 40 novas visualizações
  - Os novos compartilhamentos geram 72% de novas views

Crie um script em sua linguagem de programação preferida que receba o valor investido em reais e retorne uma projeção aproximada da quantidade máxima de pessoas que visualizarão o mesmo anúncio (considerando o anúncio original + os compartilhamentos)

const investiment = 250
const views = investiment * 30
const views2 = views * 0.72
const views3 = views2 * 0.72
const views4 = views3 * 0.72
const totalViews = views + views2 + views3 + views4

console.log(`O valor investido foi: ${investiment}R$`);
console.log(`Projeção da quantidade de views no anúncio original é: ${views} Views`);
console.log(`Projeção aproximada da quantidade de pessoas que visualizarão o anúncio compartilhado pela PRIMEIRA pessoa é: ${views2.toFixed(2)} Views `);
console.log(`Projeção aproximada da quantidade de pessoas que visualizarão o anúncio compartilhado pela SEGUNDA pessoa é: ${views3.toFixed(2)} Views`);
console.log(`Projeção aproximada da quantidade de pessoas que visualizarão o anúncio compartilhado pela TERCEIRA pessoa é: ${views4.toFixed(2)} Views`);
console.log(`Projeção da quantidade TOTAL de views com os compartilhamentos é: ${totalViews.toFixed(2)} Views`);
*/

function calculator() {
  const investiment = 2500
  const views = investiment * 30
  const views2 = views * 0.72
  const views3 = views2 * 0.72
  const views4 = views3 * 0.72
  const totalViews = views + views2 + views3 + views4

  console.log(`O valor investido foi: ${investiment}R$`);
  console.log(`Projeção da quantidade de views no anúncio original é: ${views} Views`);
  console.log(`Projeção de Views no anúncio compartilhado pela PRIMEIRA pessoa é: ${views2.toFixed(2)} Views `);
  console.log(`Projeção de Views no anúncio compartilhado pela SEGUNDA pessoa é: ${views3.toFixed(2)} Views`);
  console.log(`Projeção de Views no anúncio compartilhado pela TERCEIRA pessoa é: ${views4.toFixed(2)} Views`);
  console.log(`Projeção da quantidade TOTAL de views com os compartilhamentos é: ${totalViews.toFixed(2)} Views`);
}

calculator()