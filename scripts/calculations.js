// calculations.js

// 2. Variáveis iniciais
let budgetValue = 0;
let totalExpensesValue = 0;

// 3. Array com as despesas iniciais
let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12],
];

// 4. Calcular o total de despesas
for (let i = 0; i < expenseEntries.length; i++) {
  totalExpensesValue += expenseEntries[i][1];
  console.log("Despesas totais: " + totalExpensesValue);
}

// 5. Calcular a média das despesas
function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }
  return totalExpensesValue / expenseEntries.length;
}

// 6. Calcular saldo
function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

// 7. Alterar a cor do saldo e orçamento definido
let balanceColor = "green";

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

// 8. Calcular estatísticas por categoria
function calculateCategoryExpenses(category) {
  let categoryTotal = 0;

  for (let i = 0; i < expenseEntries.length; i++) {
    if (expenseEntries[i][0] === category) {
      categoryTotal += expenseEntries[i][1];
    }
  }

  return categoryTotal;
}

// 9. Calcular a maior categoria de despesas
function calculateLargestCategory() {
  const categories = [
    "groceries",
    "restaurants",
    "transport",
    "home",
    "subscriptions",
  ];

  let categoriesTotals = [];

  for (let i = 0; i < categories.length; i++) {
    const total = calculateCategoryExpenses(categories[i]);
    categoriesTotals.push([categories[i], total]);
  }

  let largestCategoryName = categoriesTotals[0][0];
  let largestCategoryTotal = categoriesTotals[0][1];

  for (let i = 1; i < categoriesTotals.length; i++) {
    if (categoriesTotals[i][1] > largestCategoryTotal) {
      largestCategoryTotal = categoriesTotals[i][1];
      largestCategoryName = categoriesTotals[i][0];
    }
  }

  return largestCategoryName;
}

// 10. Adicionar novas despesas
function addExpenseEntry(entry) {
  expenseEntries.push(entry);
  totalExpensesValue += entry[1];
}