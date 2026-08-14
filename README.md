# PLanSC — Software Desktop (Windows)

Sistema de Planejamento BNCC/SC em versão instalável (software), feita a partir do site **https://p-lan-sc.vercel.app**.

A autenticação é a mesma do site (Firebase): cadastro/login por e-mail confirmado, cada professor com seus próprios planos e sua chave da IA (Groq).

## Instalação

1. Baixe o instalador na página de Releases:
   https://github.com/Lafabio/PLanSC-v2/releases
   → arquivo `PLanSC Setup 1.0.0.exe`
2. Execute o arquivo e siga o assistente (pode escolher a pasta de instalação).
3. Abra o **PLanSC** pelo atalho no Menu Iniciar ou na Área de Trabalho.
4. Faça login ou crie sua conta (mesmas contas do site).

## Observações

- O app roda no computador, mas precisa de internet para:
  - Login / cadastro / recuperação de senha (Firebase);
  - Geração de conteúdo com IA (chave Groq do professor);
  - Sincronização de planos/perfil entre máquinas (Firestore);
  - Compra de tokens (Kiwify).
- Links externos (Kiwify, console do Groq) abrem no navegador padrão.
- A confirmação de e-mail usa o link do site publicado (https://p-lan-sc.vercel.app).

## Desenvolvimento

```bash
npm install
npm start          # roda o app em modo desenvolvimento
npm run dist       # gera o instalador em dist/ (PLanSC Setup <versão>.exe)
```

Estrutura:

- `main.js` — processo principal do Electron (janela, abertura de links externos).
- `preload.js` — ponte mínima entre o app web e o Electron.
- `index.html` — aplicação completa (mesma do site, com ajuste na URL de verificação de e-mail).
- `icon.ico` — ícone do instalador e do aplicativo.
- `firestore.rules` — regras de segurança do Firestore (anti-fraude de tokens/planos gratuitos).

> ⚠️ **Importante (anti-fraude):** o controle de planos gratuitos e tokens agora é validado no
> Firestore (coleção `uso_planos`). As regras em `firestore.rules` precisam estar aplicadas no
> console do Firebase (Firestore Database → Regras), senão o app cai no controle local
> (inseguro). Sem as regras aplicadas, o professor consegue burlar os 5 planos gratuitos.

Gerar o instalador exige apenas `npm run dist` (sem assinatura de código; o Windows pode avisar "Editor desconhecido" ao instalar).
