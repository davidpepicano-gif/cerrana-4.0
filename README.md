# Cerrana AI - Sales Systems & Automation Platform

![Cerrana AI Hero](https://via.placeholder.com/1200x630/0f0a1e/7c3aed?text=Cerrana+AI)

**Cerrana AI** is a modern, conversion-focused web application designed for an agency specializing in Sales Systems, CRM implementation, and AI Automation for SMBs. 

Built with a "Dark Tech" aesthetic, it prioritizes clarity, speed, and conversion, featuring a fully responsive design and interactive AI demonstrations.

## 🚀 Key Features

*   **Modern "Dark Tech" UI**: Glassmorphism, neon glows, and a deep violet/slate palette designed to convey sophistication and technology.
*   **Interactive Veo Demo**: Integrated Google GenAI (Veo 3.1) to demonstrate AI video generation capabilities directly in the browser.
*   **Conversion Focused**: Strategic CTAs, clear pricing tiers (Core, Growth, Full Funnel), and optimized service breakdowns.
*   **Responsive Layout**: Mobile-first design with a custom sticky CTA for mobile users and smooth navigation.
*   **Dynamic Routing**: Full multi-page routing for Home, Services, Pricing, About, and Contact.

## 🛠 Tech Stack

*   **Frontend**: React 19, TypeScript
*   **Styling**: Tailwind CSS (Custom Config)
*   **Icons**: Lucide React
*   **AI Integration**: Google GenAI SDK (`@google/genai`) - Veo 3.1 Model
*   **Fonts**: Orbitron (Headings), Poppins (Body)

## 📦 Project Structure

```bash
├── components/      # Reusable UI components (Layout, Header, Footer)
├── pages/          # Page views (Home, Services, Pricing, About, Contact)
├── types.ts        # TypeScript interfaces
├── index.html      # Entry HTML with Tailwind & Font setup
├── index.tsx       # Application Entry Point
└── App.tsx         # Main Router Configuration
```

## 🔧 Setup & Development

1.  **Clone the Repository**
    ```bash
    git clone https://github.com/davidpepicano-gif/cerrana-4.0.git
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Environment Setup**
    Ensure you have a valid Google GenAI API Key enabled for the project to use the Veo demo.

4.  **Run Development Server**
    ```bash
    npm run dev
    ```

## 📄 License

Proprietary software for Cerrana AI. All rights reserved.