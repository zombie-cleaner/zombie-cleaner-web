zombie-cleaner/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   └── page.tsx
│   │   └── layout.tsx
│   ├── dashboard/
│   │   └── page.tsx
│   ├── environment/
│   │   └── [id]/
│   │       └── page.tsx
│   ├── api/
│   │   └── auth/
│   │       └── route.ts
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   └── AuthLayout.tsx
│   ├── dashboard/
│   │   ├── EnvironmentCard.tsx
│   │   ├── EnvironmentList.tsx
│   │   ├── EnvironmentListSkeleton.tsx
│   │   └── AddEnvironmentModal.tsx
│   ├── auth/
│   │   ├── LoginForm.tsx
│   │   └── RegisterForm.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Modal.tsx
│   │   └── Skeleton.tsx
│   └── shared/
│       └── LoadingSpinner.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useEnvironments.ts
│   └── useModal.ts
├── lib/
│   ├── api/
│   │   └── client.ts
│   ├── auth.ts
│   └── utils.ts
├── types/
│   ├── index.ts
│   ├── auth.ts
│   └── environment.ts
├── constants/
│   ├── index.ts
│   ├── paths.ts
│   └── aws.ts
├── mock-data/
│   ├── environments.json
│   └── users.json
├── utils/
│   ├── validation.ts
│   └── formatters.ts
└── styles/
    └── globals.css