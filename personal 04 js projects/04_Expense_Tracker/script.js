document.addEventListener("DOMContentLoaded", () => {
    let expenseForm = document.getElementById("expense-form")
    let expenseName = document.getElementById("expense-name")
    let expenseAmount = document.getElementById("expense-amount")
    let expenseList = document.getElementById("expense-list")
    let total = document.getElementById("total")

    let expenses = JSON.parse(localStorage.getItem('expenses')) || [] //this will get the item present locally in dom and convert them from string to their default state OR return empty
    let totalAmount = calculateTotal()

    renderExpenses();

    expenseForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = expenseName.value.trim();
        const amount = parseFloat(expenseAmount.value.trim())

        if(name !== "" && !isNaN(amount) && amount>0){
            const newExpense = {
                id : Date.now(),
                name : name ,
                amount: amount
            }
            expenses.push(newExpense)
            setLocalStorage();
            renderExpenses();
            updateTotal()
        }   //NAN = not a number
        expenseName.value = ""
        expenseAmount.value = ""

    })


    function renderExpenses(){
      expenseList.innerHTML = ""
      expenses.forEach((expense) => {
        const li = document.createElement('li')
        li.innerHTML = `
          ${expense.name} - $${expense.amount}
          <button data-id="${expense.id}">Delete</button>
        `
        expenseList.appendChild(li)
      })
    }

    function calculateTotal(){
       return expenses.reduce((sum,expense) => sum + expense.amount,0)
    }
    function setLocalStorage(){
       localStorage.setItem("expenses",JSON.stringify(expenses))
    }
    function updateTotal(){
      totalAmount = calculateTotal();
      total.textContent = totalAmount.toFixed(2)
    }
 
    expenseList.addEventListener('click',(e) => {
        if(e.target.tagName === 'BUTTON'){
            const expenseId = parseInt(e.target.getAttribute("data-id"))
            expenses = expenses.filter((expense) => expense.id !== expenseId)

            setLocalStorage()
            renderExpenses()
            updateTotal()
        }
    })

})
