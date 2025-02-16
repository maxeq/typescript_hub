interface BankAccount {
  deposit(amount: number): void;
  withdraw(amount: number): void;
  getBalance(): number;
}

// Пример №2. Создание приватных переменных (инкапсуляция)
function createBankAccount(): BankAccount {
  let balance: number = 1000; // Приватная переменная
  console.log(`🔹 Начальный баланс: ${balance}€`);

  return {
    deposit(amount: number) {
      balance += amount;
      console.log(`✅ Баланс пополнен: +${amount}€. Всего: ${balance}€`);
    },
    withdraw(amount: number) {
      if (amount <= balance) {
        balance -= amount;
        console.log(`💰 Снято: -${amount}€. Остаток: ${balance}€`);
      } else {
        console.log(`❌ Недостаточно средств! Баланс: ${balance}€`);
      }
    },
    getBalance() {
      console.log(`📌 Текущий баланс: ${balance}€`);
      return balance;
    },
  };
}

// Создаём банковский счёт
const bank = createBankAccount();

// Тестируем пополнение и снятие средств
bank.deposit(200); // +200
bank.withdraw(500); // -500
bank.withdraw(5000); // ❌ Недостаточно средств

// Проверяем текущий баланс
bank.getBalance();
