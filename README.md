
# Product App

This is a simple Angular-based product listing and details application. You can view products, see their details, and use filters to search for specific products.

## Instructions to Run the Application

### 1. Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Install Node.js](https://nodejs.org/)
- **Angular CLI** (v13.0.0 or higher) - If not already installed, run the following command to install Angular CLI globally:
  ```bash
  npm install -g @angular/cli
  ```

### 2. Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/your-repo/product-app.git
```

### 3. Install Dependencies

Navigate to the project directory and install the required dependencies by running:

```bash
cd product-app
npm install
```

This command will install all the necessary packages specified in the `package.json` file.

### 4. Run the Application

Once all the dependencies are installed, you can start the development server with the following command:

```bash
ng serve
```

This will start the Angular development server on `http://localhost:4200`. Open this URL in your browser to access the app.

### 5. Navigate the App

- The **Product List Page** will be shown by default, listing all available products.
- You can filter products by name and max price.
- You can view detailed information for any product by clicking the **View Details** button.
- To return to the list, click the **Back to List** button on the product details page.

### 6. Customize or Extend the Application

Feel free to modify or extend this app as per your requirements. You can add new features like authentication, more detailed filters, or even API integration for fetching products dynamically.

### 7. Troubleshooting

If you run into issues, try the following steps:

- Make sure **Node.js** and **npm** are correctly installed and up to date.
- Ensure you are in the project directory when running the commands (`cd product-app`).
- If `ng serve` fails, try clearing the npm cache:
  ```bash
  npm cache clean --force
  ```
- Reinstall the dependencies:
  ```bash
  rm -rf node_modules
  npm install
  ```
