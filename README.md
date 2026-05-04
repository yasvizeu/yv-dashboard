# YV English · Dashboard

Dashboard de gestão de alunos, aulas e mensalidades.

## Stack
- **Backend**: NestJS + TypeORM + MySQL
- **Frontend**: HTML/CSS/JS puro (sem framework)

---

## Setup

### 1. Banco de dados
```sql
CREATE DATABASE yv_english CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```
> O TypeORM cria as tabelas automaticamente via `synchronize: true`.

---

### 2. Backend
```bash
cd backend
cp .env.example .env
# edite o .env com seus dados do MySQL

npm install
npm run start:dev
```
O servidor sobe em `http://localhost:3000`

---

### 3. Frontend
O frontend é estático — basta abrir `frontend/index.html` no navegador.

Em produção, coloque o `frontend/` numa pasta servida pelo nginx (ex: `/var/www/yv-dashboard`).

---

## Endpoints da API

### Alunos
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | /api/alunos | Lista todos |
| GET    | /api/alunos/:id | Detalhe com aulas e mensalidades |
| POST   | /api/alunos | Criar |
| PUT    | /api/alunos/:id | Editar |
| DELETE | /api/alunos/:id | Remover |

### Aulas
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | /api/aulas?aluno_id=1&data_inicio=2025-01-01&data_fim=2025-12-31 | Lista com filtros |
| GET    | /api/aulas/:id | Detalhe |
| POST   | /api/aulas | Criar |
| PUT    | /api/aulas/:id | Editar |
| DELETE | /api/aulas/:id | Remover |

### Mensalidades
| Método | Rota | Descrição |
|--------|------|-----------|
| GET    | /api/mensalidades?aluno_id=1 | Lista |
| POST   | /api/mensalidades | Criar |
| PUT    | /api/mensalidades/:id | Editar |
| PATCH  | /api/mensalidades/:id/pagar | Marcar como pago |
| DELETE | /api/mensalidades/:id | Remover |

---

## Deploy em VPS (nginx)

```nginx
server {
    listen 80;
    server_name seu-dominio.com;

    # Frontend
    root /var/www/yv-dashboard/frontend;
    index index.html;

    # Backend proxy
    location /api {
        proxy_pass http://localhost:3000;
    }
}
```

Para rodar o backend em produção, use PM2:
```bash
npm install -g pm2
cd backend
npm run build
pm2 start dist/main.js --name yv-dashboard
pm2 save
```
