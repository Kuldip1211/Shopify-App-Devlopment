# 🚀 Shopify App Development

A complete guide to set up and run this project with **Ngrok (No Admin Required)**.

<p align="center">
  <img src="https://img.shields.io/badge/React-blue?logo=react&logoColor=white" />
  <img src="https://img.shields.io/badge/Node.js-green?logo=node.js&logoColor=white" />
  <img src="https://img.shields.io/badge/Shopify-7AB55C?logo=shopify&logoColor=white" />
  <img src="https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white" />
</p>

---

## 📂 1. Clone the Repository
```bash
git clone https://github.com/Kuldip1211/Shopify-App-Devlopment.git
cd Shopify-App-Devlopment
```

## 📦 2. Install Dependencies
```bash
npm install
```

## ⚡ 3. Install Ngrok Without Admin
<details>
  <summary><b>Click to Expand Steps</b></summary>

```bash
# Download ngrok binary
wget https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-linux-amd64.tgz

# Extract the downloaded file
tar -xvzf ngrok-v3-stable-linux-amd64.tgz

# Move ngrok binary to your home bin folder
mv ngrok $HOME/bin/

# Update your PATH
export PATH=$HOME/bin:$PATH

# Add your ngrok auth token (replace YOUR_AUTHTOKEN)
ngrok config add-authtoken YOUR_AUTHTOKEN

# Run ngrok on desired port (example: 3000)
ngrok http 3000
```
</details>

## ▶️ 4. Start the Development Server
```bash
npm run dev
```

## 🌐 5. Access the Project
Copy the **ngrok public URL** shown in terminal and use it to access your Shopify app.

---

## 📬 Contact Information

<p align="center">
💼 <a href="https://linkedin.com/in/kuldeep-chudasama-1759b1256" target="_blank">LinkedIn</a>  
📧 <a href="mailto:kuldeepchudasama69@gmail.com">kuldeepchudasama69@gmail.com</a>
</p>