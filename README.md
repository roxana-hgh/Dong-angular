# Dong – Group Expense Sharing App 💸

**Dong** is a simple and intuitive web application for splitting expenses among friends, roommates, or travel companions.  
It tracks shared expenses and calculates the optimal payments needed to settle up fairly with minimal hassle.

> 🪙 *“Dong” comes from a Persian word meaning “share.”*

## 🌐 Live Demo

🔗 [Try the App](https://roxana-hgh.github.io/Dong-angular/start)

## 🧰 Tech Stack

- **Angular** – Application framework
- **TypeScript** – Typed JavaScript for scalable development
- **Tailwind css** – For responsive and clean UI
- **Browser Storage** – Uses `sessionStorage` to persist data across sessions

## ✨ Features

- 👥 **Easy Member Management**  
  Add and remove group members effortlessly with a user-friendly interface.

- 💰 **Expense Tracking**  
  Record who paid for what, how much, and who should share the cost.

- 🔄 **Smart Settlement Calculation**  
  Uses direct payment logic to simplify debts and reduce unnecessary transactions.

- 📊 **Detailed Breakdowns**  
  See clear reports of individual contributions and balances.

- 💾 **Persistent Storage**  
  Keeps your data safe between sessions using in-browser storage (no backend needed).

## ⚙️ How It Works

Dong uses a **direct payment settlement system**, meaning:

- Everyone pays the person who originally covered the expense.
- If two users owe each other, they only pay the **difference** to minimize transactions.
  
This keeps repayments **intuitive**, **transparent**, and fair.

## 📦 Installation

1. Clone the repository:
   ```
   git clone https://github.com/roxana-hgh/Dong-angular.git
   ```

2. Navigate to the project directory:
   ```
   cd dong
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Run the development server:
   ```
   ng serve
   ```

5. Open your browser and navigate to `http://localhost:4200`

## 🧑‍💻 Usage ##

###  ➕ Adding Members

1. Enter a name in the "Add Member" field
2. Click "Add" to add the member to your group

### 🧾  Recording Expenses

1. Click "Add Expense"
2. Enter expense details:
   - Name of the expense
   - Amount paid
   - Who paid for it
   - Which members to split the expense between
3. Save the expense

### 💳 Viewing Settlements

1. Navigate to the "Settlements" tab
2. View the list of payments needed to settle all expenses
3. Mark payments as complete once they've been made

## 📌 Acknowledgments

- Inspired by the need for a simple, intuitive expense sharing solution
- Name "Dong" comes from a Persian word meaning "share"
