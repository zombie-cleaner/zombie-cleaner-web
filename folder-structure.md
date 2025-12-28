zombie-cleaner/
├── public/
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── components/
│   │   ├── auth/
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── dashboard/
│   │   │   ├── EnvironmentCard.tsx
│   │   │   ├── AddEnvironmentModal.tsx
│   │   │   └── EnvironmentList.tsx
│   │   ├── layout/
│   │   │   ├── Layout.tsx
│   │   │   ├── Header.tsx
│   │   │   ├── Sidebar.tsx
│   │   │   └── LoadingSkeleton.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Input.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   └── shared/
│   │       └── ProtectedRoute.tsx
│   ├── constants/
│   │   ├── index.ts
│   │   ├── routes.ts
│   │   └── aws.ts
│   ├── hooks/
│   │   ├── useAuth.ts
│   │   ├── useEnvironments.ts
│   │   └── useModal.ts
│   ├── layouts/
│   │   ├── AuthLayout.tsx
│   │   └── DashboardLayout.tsx
│   ├── lib/
│   │   ├── auth.ts
│   │   ├── validation.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── api/
│   │   │   └── auth/
│   │   │       └── login.ts (mock API)
│   │   ├── _app.tsx
│   │   ├── _document.tsx
│   │   ├── index.tsx (login)
│   │   ├── register.tsx
│   │   ├── dashboard.tsx
│   │   ├── environment/
│   │   │   └── [id].tsx
│   │   └── 404.tsx
│   ├── store/
│   │   ├── authStore.ts
│   │   └── environmentStore.ts
│   ├── styles/
│   │   └── globals.css
│   ├── types/
│   │   ├── index.ts
│   │   ├── auth.ts
│   │   └── environment.ts
│   └── utils/
│       ├── mockData.ts
│       └── helpers.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md