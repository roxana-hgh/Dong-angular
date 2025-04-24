# Dong
# Dong - Group Expense Sharing App

Dong is a simple, intuitive application for splitting expenses among groups of friends, roommates, or travel companions. It helps track who paid for what and calculates the optimal settlement payments to ensure everyone is paid back fairly.

## Features

- **Easy Member Management**: Add and remove group members with a simple interface
- **Expense Tracking**: Record expenses with details about who paid and how the cost should be split
- **Smart Settlement Calculation**: Automatically calculates who owes what to whom using direct payment logic
- **Detailed Breakdowns**: View detailed expense reports for each member
- **Persistent Storage**: Data is saved between sessions in your browser

## How It Works

Dong uses a direct payment settlement system where:

1. Each person pays directly to whoever initially paid for an expense
2. When two people owe each other, they only pay the difference to minimize unnecessary transactions

This approach makes repayments more intuitive and transparent for all users.

## Technologies Used

- **Angular**: Frontend framework for building the application interface
- **TypeScript**: For type-safe programming
- **Browser Storage**: Uses sessionStorage to persist data between page reloads

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dong.git
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

## Usage

### Adding Members

1. Enter a name in the "Add Member" field
2. Click "Add" to add the member to your group

### Recording Expenses

1. Click "Add Expense"
2. Enter expense details:
   - Name of the expense
   - Amount paid
   - Who paid for it
   - Which members to split the expense between
3. Save the expense

### Viewing Settlements

1. Navigate to the "Settlements" tab
2. View the list of payments needed to settle all expenses
3. Mark payments as complete once they've been made

## Acknowledgments

- Inspired by the need for a simple, intuitive expense sharing solution
- Name "Dong" comes from a Persian word meaning "share"
